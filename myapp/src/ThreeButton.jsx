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

    <div>
        <p>{count}</p>
        
        <button onClick={decrement} id="red">Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
