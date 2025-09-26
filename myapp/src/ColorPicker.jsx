import { useState } from "react";

export default function ColorPicker() {

        const [color, setcolor] = useState("#f0f0f0");

        function handleColorChange(event)
        {
            setcolor(event.target.value)
        }
    

  return (
    <div className="color-picker-container">
        <h1>Color picker</h1>

        <div className="color-display" style={{background:color}}>
            <p>selected Color:</p>
        </div>
        <label htmlFor="">Select a color</label>
        <input type="color" name="" id="" value={color} onChange={handleColorChange}/>

    </div>
  )
}
