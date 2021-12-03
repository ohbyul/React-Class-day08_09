import React, { useState } from 'react';
import './style.css'


const imgList = [
    {id:1, title:'곰순이0', image:'./images/cat0.jpg', desc:'곰순이0에 대한 설명입니다.'},
    {id:2, title:'곰순이1', image:'./images/cat1.jpg', desc:'곰순이1에 대한 설명입니다.'},
    {id:3, title:'곰순이2', image:'./images/cat2.jpg', desc:'곰순이2에 대한 설명입니다.'},
    {id:4, title:'곰순이3', image:'./images/cat3.jpg', desc:'곰순이3에 대한 설명입니다.'},
    {id:5, title:'곰순이4', image:'./images/cat4.jpg', desc:'곰순이4에 대한 설명입니다.'},
    {id:6, title:'곰순이5', image:'./images/cat5.jpg', desc:'곰순이5에 대한 설명입니다.'},
    {id:7, title:'곰순이6', image:'./images/cat6.jpg', desc:'곰순이6에 대한 설명입니다.'},
]


const TestGallery = () => {
    const [data, setData] = useState( imgList )
    const [cat , setCat] = useState( data[0] )
    // const [cat , setCat] = useState( imgList[0] )

    const onView = (id)  => {
        // setCat( data[ id - 1 ])
        setCat( data.find( item => item.id === id ))
        //findIndex
    }

    return (
        <div className="wrap">
            <div className="bigview">
                <div className="bigimg">
                    <img src={cat.image} alt={cat.title} />
                    <h2> {cat.title} </h2>
                </div>
                <ul>
                    {
                        data.map( item =>  <li key={item.id} 
                            onClick={ () => onView(item.id) }
                        >
                            <img src={item.image} alt={item.title}/>
                        </li>)
                    }                   
                </ul>
            </div>
            <div className="text">
                <strong> {cat.title} </strong>
                <p> {cat.desc} </p> 
            </div>     
        </div>
    );
};

export default TestGallery;