import React from 'react'

export default function Ubutton() {
    
const [name, setName] = useState("Nothing to show")
const [age, setage] = useState("Not mentioned")
function updateName(){
    let getname=prompt("Enter your name")
    let getage=prompt("Enter your Age");
   setName(getname);
   setage(getage);
}
    return(
        <div>
            <p>
                Name:{name}
                <br />
                Age:{age}
            </p>
        <button onClick={updateName}>Click me</button>
        </div>
    );
}
