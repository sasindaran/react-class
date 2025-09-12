import PropTypes from "prop-types";

export default function Student(info)
{
    return(
        // if true display welcome-message
        // if false display no-login
        info.isStudent?<h1 className="welcome-message">Welcome  to Skyllx {info.name}</h1>: 
        <h1 className="no-login">User not Found</h1>
    )
}
Student.propTypes = {
  name: PropTypes.string.isRequired,   // must be a string
  age: PropTypes.number.isRequired,    // must be a number
  isStudent: PropTypes.bool.isRequired // must be true/false
};
