import { useState } from "react";
export default function ThreeButton() {

    
  
        const[count,setCount]=useState(0);

        const increment=()=>{
            setCount(count+1);
        }

        const decrement=()=>{
            setCount(count-1);
        }

        const reset=()=>{
            setCount(0);
        }
    return (

    <div style={{marginTop:300,marginLeft:400}}>
        <p>{count}</p>
        
        <button onClick={decrement} className="btn" id="red">Decrement</button>
        <button onClick={reset} className="btn">Reset</button>
        <button onClick={increment} className="btn" id="green">Increment</button>
    </div>
  )
}
