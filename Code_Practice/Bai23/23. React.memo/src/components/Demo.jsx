import { useState } from 'react';
import Child from './Child';
//component con
    // const Child = memo(function Child({ value }) {
    //     console.log('Child render'); // theo dõi mỗi lần render
    //     return <div>Parent value: {value}</div>;
    // })

//component cha

function Parent() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Tăng cha</button>
            <div>Gía tri đếm của cha: {count}</div>
            <Child value={count} />
        </>
    );
}

export default Parent;