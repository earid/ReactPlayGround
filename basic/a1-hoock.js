import React from 'react'
import { useState } from "react";
import '../src/App.css'

const App = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Dora');
    const [object, setObject] = useState(
        {
            count: 0.,
            value: ''
        }
    )
    const incr = () => {
        setCount(count + 1)

    }
    const incr2 = () => {
        setObject((prevState) => ({
            ...prevState, count: prevState.count + 1
        }))
    }
    return (
        <div className="container">
            <div className="div">

                <input type="text" onChange={e => setValue(e.target.value)} />
                <h1>{value} is Count:{count} </h1>
                <h1>{object.value} is Count:{object.count} </h1>
                <button onClick={incr}>Click Me inc</button>
                <button onClick={incr2}>Click Me inc2</button>
            </div>
        </div>
    )
}

export default App
