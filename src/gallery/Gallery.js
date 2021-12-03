import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import imgList from '../assets/api/imgdata'
import './style.css'

const Gallery = () => {
    const [data, setData] = useState( imgList )
    const [cat, setCat] = useState( data[0] )

    const onView = (id)  => {
        // setCat( data[ id - 1 ])
        setCat( data.find( item => item.id === id ))
        //findIndex
    }
    

    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView} />
            <GalleryText cat={cat} />
        </div>
    );
};

export default Gallery;