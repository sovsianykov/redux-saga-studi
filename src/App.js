import Counter from "./components/Counter";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

function App() {
    const count = useSelector(  state => state.counter.count)
  return (
    <div className="App">
        <Typography variant= 'h3' align='center'  >
            { `Count : ${count}`}
        </Typography>
       <Counter/>
    </div>
  );
}

export default App;
