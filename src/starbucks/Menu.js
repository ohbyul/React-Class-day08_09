import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menuList, onView}) => {
    return (
        <ul className="menu">
            {
                menuList.map ((item,index) => <MenuItem key={index} item={item} onView={onView}/> )
            }
        </ul>
    );
};

export default Menu;