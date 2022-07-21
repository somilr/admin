import React, { useMemo, useState } from 'react'

export default function UsememoExmple() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(1)

    const factorialNumber = (n) => {
        console.log("factorialNumber");
        if (n > 1) {
            return (n * factorialNumber(n-1))
        } else {
            return 1;
        }
     }

    // const reject = factorialNumber(number)

    const reject = useMemo(() => factorialNumber(number), [number])

    return (
        <>
        <h4>Usememo Exmple</h4>
            <input type="number" placeholder="Enter Number" onChange={(e) => setNumber(e.target.value)} /><br/><br/>

            <button type='button' onClick={() => setCounter(counter + 1)}>Counter</button>

            <p>Counter value : {counter}</p>

            <p>factorial number value : {reject}</p>
        </>
    )
}
