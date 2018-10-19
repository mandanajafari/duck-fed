import React from 'react';
import DataEntry from './dataEntry';
import Spin from './spin';
import './main.css'
import post from '../utility/postman';

export default class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            foodCategories: []
        };
    }

    componentDidMount() {
        post('/food/getCategories')
            .then(x => x.json())
            .then(foodCategories => this.setState({ loading: false, foodCategories }));
    }

    render() {
        const { loading, foodCategories } = this.state;
        return (
            <React.Fragment>
                <div className='main'>
                    <div className='header'>
                        <div className='logo' />
                        <div className='welcome'>Duck Duck Duck</div>
                    </div>
                    <div className='content'>
                        {!loading && <DataEntry categories={foodCategories} />}
                        {loading && <Spin />}
                    </div>
                </div>
                <div className='footer'>
                    © Manada Jafari 2018
                </div>
            </React.Fragment>
        )
    }
}