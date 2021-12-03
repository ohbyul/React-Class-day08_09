import React from 'react';

const GalleryBig = ({cat}) => {
    const { title , image } = cat 
    return (
        <div className="bigimg">
            <img src={image} alt={title} />
            <h2> {title} </h2>
        </div>
    );
};

export default GalleryBig;