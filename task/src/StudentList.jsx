export default function StudentList(info) {
    if(info.ispresent==true)
    {
    return (
    <div className="Green">
        Student id:{info.id}
        <br />
        Student Name:{info.name}
    </div>
    )
    }
    else{
       return (
    <div className="Red">
        Student id:{info.id}
        <br />
        Student Name:{info.name}
    </div>
    ) 
    }
  
}
