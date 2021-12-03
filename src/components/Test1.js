import React, { useRef, useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {
    const no = useRef(6)
    const [ data , setData ] = useState([
        {id:1, name:'홍길동'},
        {id:2, name:'강호동'},
        {id:3, name:'김철수'},
        {id:4, name:'전지현'},
        {id:5, name:'송혜교'},
    ])

    const onAdd1 = () => {
        setData([
            ...data ,
            {
                id:no.current++ ,
                name:'이정재'
            }
        ])
    }

    //삭제
    const onDel1 = ()  => {
        setData( data.filter( item => item.id !== 1 ))
    }
    const onDel2 = ()  => {
        setData( data.filter( item => item.id !== 4 ))
    }
    const onDel = ( id )  => {
        setData( data.filter( item => item.id !== id ))
    }

    //수정
    const modify = (id)  => {
        //수정
        setData( data.map( item => item.id === id ? {...item,name:'고민지'} :item ))
    }

    /*
        setData( data.map( item => {
            if( item.id === id ) {
                return {
                ...item,
                name:'고민지'
                }
            }
            return item 
        } ))

    */

    return (
        <div>
            <Test1Sub onAdd1={onAdd1} onDel1={onDel1} onDel2={onDel2}  onDel={onDel} modify={modify} />
            <hr/>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;