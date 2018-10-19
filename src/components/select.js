import React from 'react';

export default ({ datasource, value, onChange, ...rest }) => {
    const options = datasource.map(item => {
        return <option key={item.key}>{item.name}</option>
    });
    options.splice(0, 0, <option key={''}>{''}</option>)
    return (
        <select {...rest} onChange={onChange} value={value}>
            {options}
        </select>
    );
}