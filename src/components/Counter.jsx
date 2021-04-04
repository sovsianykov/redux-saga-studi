import React, {useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";

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
             <Grid container justify='center'>
                <Grid item mt={5} >
                    <div className="main">
                    <Typography variant= 'h3' align='center'  >
                        { `Count : ${count}`}
                    </Typography>
                        <Button variant='contained' onClick={increment} color='primary'>Increment</Button>
                        <Button variant='contained' onClick={decrement} color='secondary'>Decrement</Button>
                    </div>
                </Grid>
             </Grid>
        </div>

    )
}

export default Counter