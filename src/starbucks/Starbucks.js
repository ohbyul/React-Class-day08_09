import React, { useState } from 'react';
import './style.css'
import dataList from '../assets/api/coffeedata'
import CoffeeList from './CoffeeList';
import Menu from './Menu';


//const menuList = ['all','coldbrew','espresso','frappuccino','fizzio']
const menuList = ['all',...new Set( dataList.map(item => item.name))]
//뉴셋 사용법 
const Starbucks = () => {
    const [data, setData] = useState(dataList);
    
    const onView = (name) => {
        
        if(name == 'all'){
            setData(dataList)
        }else{
            setData(dataList.filter(item => item.name === name))
            //data가 아닌 dataList 에서 필터해야한다.
            //원본 파일에서 걸러줘야한다 data로 필터시, 첫 클릭은 나오지만 두번째 클릭은 나오지않는다.
        }
    }

    return (
        <div className="wrap">
            <h1>STARBUCKS MENU</h1>
            <Menu menuList ={menuList} onView={onView}/>
            <CoffeeList data={data}/>
        </div>
    );
};

export default Starbucks;