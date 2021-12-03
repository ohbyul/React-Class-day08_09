import React from 'react';

const Test1Sub = ({onAdd1, onDel1, onDel2, onDel, modify}) => {
    return (
        <div>
            <p>
                <button onClick={onAdd1} >추가1</button>
                <button>추가2</button>                
            </p>
            <p>
                <button onClick={() => onDel(1)}>강호동 삭제</button>
                <button onClick={() => onDel(4)}>전지현 삭제</button>
            </p>
            <p>
                <button onClick={ () => modify(5) }>송혜교-고민지로 수정</button>
            </p>
        </div>
    );
};

export default Test1Sub;