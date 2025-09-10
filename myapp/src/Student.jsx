export default function Student(info)
{
    if(info.isStudent)
    {
    return(
        <div class="bord">
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            {/* <p>Student: {info.isStudent ? "Yes":"no"}</p> */}
        </div>
    )
}
}