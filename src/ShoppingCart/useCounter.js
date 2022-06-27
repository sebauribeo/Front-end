import { useState } from "react"


export const useCounter = (value = 1) => {
    const [counter, setCounter] = useState(value)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return {
        counter,
        increment,
        decrement
    }
}