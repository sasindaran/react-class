export default function Student(info)
{
    return(
        // if true display welcome-message
        // if false display no-login
        info.isStudent?<h1 className="welcome-message">Welcome  to Skyllx {info.name}</h1>: <h1 className="no-login">User not Found</h1>
    )
}
