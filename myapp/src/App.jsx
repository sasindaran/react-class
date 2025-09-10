import Student from "./Student";
import Stud from "./Stud";
function App()
{
  return(
    <div>
      <Student name="Itachi" age={21} isStudent={true}/>
      <Student name="Naruto" age={21} isStudent={true}/>
      <Student name="Jiraiya" age={21} isStudent={true}/>
      <Student name="Minato" age={21} isStudent={true}/>
      {/* <Stud name="Itachi" age={21} isStudent={true}/> */}
    </div>
  );
}

export default App;