export default function Student(info)
{
    return(
        <div class="bord">
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
            <p>Student: {info.isStudent ? "Yes":"no"}</p>
        </div>
    )
}