
import './App.css'
import StudentList from './StudentList'

function App() {

 const list=[{id:1,name:"John snow" ,ispresent:true},{id:2,name:'Itachi',ispresent:false},{id:3,name:'naruto',ispresent:true}]

  const stu_list=list.map((item,index)=><StudentList key={item.id} id={item.id} name={item.name} ispresent={item.ispresent}/>)

  return (
    <>
     {stu_list}
    </>
  )
}

export default App
