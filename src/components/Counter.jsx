import React, {useState} from "react";
import {Button, Typography} from "@material-ui/core";

const Counter = () => {
    const [ count, setCount] = useState(0);

    const increment = () => {
        setCount( count  + 1)
    }
    const decrement = () => {
        setCount( count - 1)
    }
    return (
        <div>
            <div className="main">
                <Typography variant= 'h3' align='center' style={{ background : "antiquewhite"}} >
                    { `Count : ${count}`}
                </Typography>
                <Button variant='contained' onClick={increment} color='primary'>Increment</Button>
                <Button variant='contained' onClick={decrement} color='secondary'>Decrement</Button>
            </div>
        </div>

    )
}

export default Counter