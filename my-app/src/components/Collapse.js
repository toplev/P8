import '../styles/Collapse.css'
import { useState } from 'react'

function Collapse(){

    const [count, setCount] = useState(4)

    function decrementCount() {
        setCount(count - 1)
    }

    return (
        <div className='main'>
        <div className='button'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button>+</button>
        </div>
        </div>
    )
}

export default Collapse;