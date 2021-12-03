import React, { useRef, useState } from 'react';


/** ul li 출력이 잘 안된다..이유.. 모르겠음 */
const Form = ({onAdd}) => {
    const [text,setText] =useState('')
    const textRef=useRef()

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onInsert = (e) => {
        e.preventDefault()
        //엔터시 새로고침 방지
        onAdd(text)
        setText('')
        textRef.current.focus()
    }
    return (
        <form onSubmit = {onInsert}> 
            <input type = "text" value = {text} onChange = {changeInput} ref={textRef} />
            <button type = "submit" onClick = { onInsert }>확인</button>
        </form>
    );
};

const List = ({data,onDel}) => {
    return (
        <ul>
            {
                data.map( item => <Item key = {item.id} item = {item} onDel={onDel} />)
            }
        </ul>
    );
};

const Item = ({item,onDel}) => {
    const {id,text} = item;
    
    return (
        <li>
            {id}번 : 내용 : {text}
            <button onClick = { () => onDel(id)}>삭제</button>
            {/* 최상 부모 컨포넌트에 id값을 전달해준다. */}
        </li>
    );
};

const Test4 = () => {
    const no = useRef(6)
    const [data , setData] = useState([
        {id:1,text:'운동 하기'},
        {id:2,text:'밥 먹기'},
        {id:3,text:'잠 자기'},
        {id:4,text:'누어있기'},
        {id:5,text:'아무거토 안하기'},
    ])
    //삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    //추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id:no.current++,
                text: text
            }
        ])
        //내 실수 concat으로 연결하러 했다.
    }
    return (
        <div>
            <h1>할일 만들기</h1>
            <Form onAdd = {onAdd}/>
            <hr />
            <List data={data} onDel={onDel}/>
        </div>
    );
};

export default Test4;