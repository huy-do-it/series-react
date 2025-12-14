import { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);

    // const handleIncrease = useCallback(() => {
    //     setCount((prevCount) => prevCount + 1);
    // });
    
    // Sử dụng useCallback với mảng rỗng để hàm không bị tạo lại
    const handleIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    return (
        <>
            <div>Gía tri đếm của cha: {count}</div>
            <Child value={1} onButtonClick={handleIncrease} />
        </>
    );
}

export default Parent;