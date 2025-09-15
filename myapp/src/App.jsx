import Student from "./Student";
import Stud from "./Stud";
import PropTypes from "prop-types";
import List from './List'

function App()
{
let  arr=["Naruto","Itachi","Jiraiya"]

// let list1=[];

// for(let i=0;i<arr.length;i++)
// {
//   list1.push(<Student name={arr[i]} age={0} isStudent={true}></Student>)
// }

  return(
    <div>
      <List/>
    </div>
  );
}


export default App;