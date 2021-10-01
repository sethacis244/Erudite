import React, {useState} from 'react'

export const StudentCreateGame = () => {
    const [counter, setCounter] = useState(0);
    function inc() {
        setCounter(counter + 1)
    }
    function dec() {
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>Student CreateGame page</h1>
            <label>Counter: {counter}</label>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </>)
}