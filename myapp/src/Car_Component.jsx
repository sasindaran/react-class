import {useState} from 'react';
export default function Car_Component() {

    const [car, setcar] = useState(["Hyundai","Ford","ShelbyFord","Mahindra"])
    const [inputValue, setinputValue] = useState("")

    function handleremove(carToremove)
    {
        const filterList=car.filter((item,idx)=>item !==carToremove)
        setcar(filterList)
    }

    const handleOnChange = (e) => {
        setinputValue(e.target.value)
    }
    function handleAddCar()
    {
        // setinputValue(document.getElementById("carInput").Value);
        setcar(prev=>[...prev,inputValue])
    }
    

  return (
    <div>
        <h1>List of Cars</h1>
        <ul>
            {
                car.map((car,index)=><li key={index}>
                    {car}
                    <span onClick={()=>handleremove(car)} style={{cursor:"pointer"}}>
                        ❌
                    </span>
                </li>)
            }
            
            <input type="text" id="carInput" placeholder="Enter the car name" onChange={handleOnChange}/>
            <button onClick={handleAddCar}>Add car</button>
        </ul>
    </div>
  )
}
