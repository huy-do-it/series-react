import { useState, useMemo } from 'react'

export default function Demo({ number }) {
    // hàm tính toán nặng
    function ExpensiveCalculation(num) {
        console.log('Calculating...');
        let result = 0;
        for (let i = 0; i <= 999; i++) {
            result += num;
        }
        return result;
    }
    //ghi lại kết quả tính toán
    // const result = ExpensiveCalculation(number)
    const result = useMemo(() => ExpensiveCalculation(number), [number]);
    const [count, setCount] = useState(0);

    return(
        <>
            <div>Kết quả tính toán: {result}</div>
            <button onClick={() => setCount(count + 1)}>Tăng đến: {count}</button>
        </>
    );
}