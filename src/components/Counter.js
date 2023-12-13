import { useState } from 'react';

import Panel from './Panel'
import Button from './Button'

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(parseInt(initialCount));
    const [valueToIncrement, setValueToIncrement] = useState('')

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleInputChange = (event) => {
        setValueToIncrement(parseInt(event.target.value))
    }

    const handleAddToCount = (event) => {
        event.preventDefault();
        setCount(count + valueToIncrement)
        setValueToIncrement('')
    }
    
    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count: { count }</h1>
            <div className='flex flex-row'>
                <Button primary onClick={handleIncrement}>Increment the count</Button>
                <Button primary onClick={handleDecrement}>Decrement the count</Button>
            </div>
            <div>
                <form onSubmit={handleAddToCount}>
                    <label htmlFor='count'>Number to add</label>
                    <input className='p-1 m-3 bg-gray-50 border border-gray-300' id='count' type='number' value={valueToIncrement} onChange={(event) => handleInputChange(event)}/>
                    <Button primary>Add the count</Button>
                </form>
            </div>
        </Panel>
    )
}

export default Counter;