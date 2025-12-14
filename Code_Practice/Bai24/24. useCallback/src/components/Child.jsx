import { memo } from 'react';

function Child({ value, onButtonClick }) {
    console.log('Child render'); // theo dõi mỗi lần render
    return (
        <>
            <div>Parent value: {value}</div>
            <button onClick={onButtonClick}>Tăng cha</button>
        </>
    );
}


export default memo(Child);

