import { useState } from "react"

export default function form() {
    const [name,setName]=useState("guest");
    const [quantity, setquantity] = useState(0)
    const [comment, setcomment] = useState("");
    const [payment, setpayment] = useState("");
    const [shipping, setshipping] = useState("");
    function handleNamechange(event){
        setName(event.target.value)
    }

    function handleQuantitychange(e){
        setquantity(e.target.value)
    }

    function handleCommentChange(e){
        setcomment(e.target.value)
    }
    function handlePaymentChange(e)
    {
      setpayment(e.target.value)
    }

    function handleShippingChange(e)
    {
      setshipping(e.target.value)
    }
  return (
    <div className="form-div" style={{margin:40}}>
        <form>

        <p > Name :{name}  </p>
        <input type="text" name="name" onChange={handleNamechange}/>
    
        <br />
        <p>Quality :{quantity}</p>
        <input type="number" name="quality" onChange={handleQuantitychange} />
        <p>Comment for users:{comment}</p>
        <textarea  placeholder="Enter delivery instructions" onChange={handleCommentChange}></textarea>
        <p>Payment Method :{payment}</p>
        <select onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Gift Card">Gift card-0</option>
          <option value="Visa">Visa</option>
          <option value="COD">COD</option>
        </select>

        <p>Shipping Status :{shipping}</p>
        <label>
          <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/> Delivery
        </label>

        
        <label>
          <input type="radio" value="Delivery" checked={shipping==="Pickup"} onChange={handleShippingChange}/>Pickup
        </label>

        </form>
    </div>
  )
}
