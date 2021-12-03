import React, { useState } from 'react';


const dataList = [
    {id:1,name:'chk1',text:'이용약관(필수)',isChecked : false},
    {id:2,name:'chk2',text:'개인정보동의',isChecked : false},
    {id:3,name:'chk3',text:'이메일수신동의',isChecked : false},
]
//map으로 돌려서 checkBox만들기
const Test2 = () => {
    const [data,setData] =useState(dataList)
    
    const changeInput = (e) => {
        const {name, checked} = e.target;
        if(name === 'all'){
            setData(
                data.map(item => {return{...item, isChecked : checked}}
                )
            )
        }else{
            setData(
                data.map(item => item.name ===name ? 
                    {...item, isChecked : checked} 
                    : item
                )
            )
        }
    }
    
    return (
        <div>
            <p >
                <input type = "checkbox" name ="all" onChange ={changeInput} 
                checked = {data.filter(item => item.isChecked !== true).length < 1 }
                />
                <label> 전체동의 </label>
            </p>
            <hr />
            {
                data.map(item => <p key ={item.id}>
                    <input type = "checkbox" 
                            name={item.name} 
                            checked = {item.isChecked} 
                            onChange ={changeInput}
                    />
                    <label> {item.text} </label>
                </p>)
            }
        </div>
    );
};

export default Test2;