import { useState } from "react"

export default function form() {
    const [name,setName]=useState("guest");
    const [quantity, setquantity] = useState(0)

    function handleNamechange(event){
        setName(event.target.value)
    }

    function handleQuantitychange(e){
        setquantity(e.target.value)
    }

  return (
    <div className="form-div" style={{margin:40}}>
        <form>

        <p > Name :{name}  </p>
        <input type="text" name="name" onChange={handleNamechange}/>
    
        <br />
        <p>Quality :{quantity}</p>
        <input type="number" name="quality" onChange={handleQuantitychange} />
        </form>
    </div>
  )
}
