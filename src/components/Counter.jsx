import React, {useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import { increment , decrement } from "../redux/ducks/actions";
import { useDispatch, useSelector } from "react-redux";

const Counter = (props) => {
    const dispatch = useDispatch()
    const name = props.name

    return (
        <div>
             <Grid container justify='center'>
                <Grid item mt={5} >
                    <div className="main">
                         <p>{name}</p>
                        <Button variant='contained' onClick={() => dispatch(increment())} color='primary'>Increment</Button>
                        <Button variant='contained' onClick={() => dispatch(decrement())} color='secondary'>Decrement</Button>
                    </div>
                </Grid>
             </Grid>
        </div>

    )
}

export default Counter
