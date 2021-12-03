import React from 'react';

const GalleryItem = ({ item , onView}) => {
    const { id, image, title } = item 
    
    return (
        <li onClick={ () => onView(id) }>
           <img src={image} alt={title} /> 
        </li>
    );
};

export default GalleryItem;