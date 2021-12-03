import React from 'react';
import CoffeeItem from './CoffeeItem';

const CoffeeList = ({data}) => {
    return (
        <ul className = "list">
            {
                data.map (item => <CoffeeItem key={item.id} item={item}/>)
            }
        </ul>
    );
};

export default CoffeeList;