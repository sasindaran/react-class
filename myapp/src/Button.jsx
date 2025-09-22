import { useState } from "react";
function Button(){
    
const [name, setName] = useState("Nothing to show")
const [age, setage] = useState(0)

const [isEmployed,setIsEmployed]=useState(false);

const updateName=()=>{
    setName("durba");
}

const updateAge=()=>{
    setage(age+1);
}

const toggleEmployeStatus=()=>{
    setIsEmployed(!isEmployed);
}


// function updateName(){
//     let getname=prompt("Enter your name")
//     let getage=prompt("Enter your Age");
//    setName(getname);
//    setage(getage);
// }
    return(
        <div>
            <p> Name :{name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Age :{age}</p>
            <button onClick={updateAge}>
                set Age
            </button>
            <p> is Employed ? {isEmployed ? "Yes" :"No"}</p>
            <button onClick={toggleEmployeStatus}>Toggle Status</button>
        </div>
    );
}



export default Button;