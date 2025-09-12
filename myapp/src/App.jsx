import Student from "./Student";
import Stud from "./Stud";


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
      {
        arr.map((item)=>(
          <Student name={item} age={21} isStudent={true}/>
        ))
      }
      {/* <Student name="Naruto" age={21} isStudent={true}/>
      <Student name="Jiraiya" age={21} isStudent={true}/>
      <Student name="Minato" age={21} isStudent={false}/> */}
      {/* <Stud name="Itachi" age={21} isStudent={true}/> */}
      {/* {list1} */}
    </div>
  );
}

export default App;