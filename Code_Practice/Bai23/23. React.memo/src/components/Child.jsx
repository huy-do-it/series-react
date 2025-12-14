import { memo } from 'react';

// function Child({ value }) {
//     console.log('Child render'); // theo dõi mỗi lần render
//     return <div>Parent value: {value}</div>;
// }


// export default memo(Child);

// Cách 2: 
export default memo(function Child({ value }) {
        console.log('Child render'); // theo dõi mỗi lần render
        return <div>Parent value: {value}</div>;
    });
