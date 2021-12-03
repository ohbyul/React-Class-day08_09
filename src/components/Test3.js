import React, { useState } from 'react';

//rest 객체, 배열, 그리고 함수의 파라미터를 사용
// ...rest 를 사용하여 우리가 지정한 props를 제외한 나머지값을 rest 라는 객체에 모아준다.

const Test3Sub = ( {handleChange,id,label,text, ...rest } ) => {
    return (
        <div>
            <label htmlFor={id} > {label} </label>
            <input type="text" onChange = {handleChange} id= {id} value ={text} 
            {...rest}
            />
        </div>
    );
};

const Test3 = () => {
    const [text,setText] = useState('')
    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }
    return (
        <div>
            <h1>폼 만들기</h1>
            <Test3Sub 
                type = "email"
                id ="abcd"
                label ="이메일"
                placeholder ="이메일주소를 입력하세요"
                text = {text}
                handleChange ={handleChange}
            />
            <hr /> 
            {
                text.trim().length > 0 ?
                (<output>입력한 값은 {text} 입니다.</output>)
                : 
                (<output>입력 값 대기중...</output>)
            }
        </div>
    );
};

export default Test3;