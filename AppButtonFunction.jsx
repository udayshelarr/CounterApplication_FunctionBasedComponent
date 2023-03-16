import React from "react";
import "./AppButtonFunction.css"

const AppButtonFunction=()=>{
    let [count, setCount]=React.useState(0)

    let handleinc=()=>{
        setCount(count+1)
    }
    let handledic=()=>{
        setCount(count-1)
    }
    let handlere=()=>{
        setCount(0)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleinc}>+ Increase</button>
        <button onClick={handledic}>- Decreament</button>
        <button onClick={handlere}>Reset</button>
        </>
    )
}

export default AppButtonFunction