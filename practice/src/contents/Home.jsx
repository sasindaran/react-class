import Student from "./Student";

export default function Home(info) {
  return (
    <div>This is {info.school}
    <Student name={info.name} age={info.age} isStudent={true}/></div>
    
  )
}
