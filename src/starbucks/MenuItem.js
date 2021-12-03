import React from 'react';

const MenuItem = ({item,onView}) => {
    
    return (
        <li onClick = { () => onView(item)}>
            {item}
        </li>
    );
};

export default MenuItem;