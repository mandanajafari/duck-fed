import React from 'react';
import { Form, Input, Select, Button } from '../components/index';
import post from '../utility/postman';
import './dataEntry.css'


export default class DataEntry extends React.Component {
    constructor() {
        super();

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            duckCount: null,
            foodId: null,
            time: null,
            location: null,
            quantity: null,
            category: null,

            duckCount_error: false,
            foodId_error: false,
            time_error: false,
            location_error: false,
            quantity_error: false,
            category_error: false,
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const validationPart = { [`${name}_error`]: !value };

        this.setState({
            [name]: value,
            ...validationPart
        });
    }

    handleSave() {
        const model = {};
        const newState = {};
        Object.keys(this.state)
            .filter(item => item.indexOf('error') === -1)
            .forEach(item => {
                if (!this.state[item]) {
                    newState[`${item}_error`] = true;
                }
                else {
                    model[item] = this.state[item];
                }
            });

        if (Object.keys(newState).length) {
            this.setState(newState);
        }
        else {
            post('/food/submit', model)
                .then(x => {
                    // TODO: ?
                });
        }
    }

    render() {
        const { categories } = this.props;
        const { duckCount, foodId, time, location, quantity, category } = this.state;
        const { duckCount_error, foodId_error, time_error, location_error, quantity_error, category_error } = this.state;
        return (
            <div className='container'>
                <Form>
                    <Form.Item label='How Many' invalid={duckCount_error} >
                        <Input value={duckCount} name='duckCount' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Category' invalid={category_error}>
                        <Select value={category} datasource={categories} name='category' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Food' invalid={foodId_error}>
                    {/*TODO: cascade drop down */}
                        <Select value={foodId} datasource={[]} name='foodId' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='How Much' invalid={quantity_error}>
                        <Input value={quantity} name='quantity' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='When' invalid={time_error}>
                        {/*TODO: Need a Datepicker */}
                        <Input value={time} name='time' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label='Where' invalid={location_error}>
                        <Input value={location} name='location' onChange={this.handleChange} />
                    </Form.Item>
                    <div className='commands'>
                        <Button onClick={this.handleSave}>Submit</Button>
                    </div>
                </Form>
            </div>
        );
    }
}