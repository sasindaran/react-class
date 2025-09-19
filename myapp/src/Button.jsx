function Button(){

    function print_elevent(e){
        e.target.textContent="chinda baku dam dam";
        setTimeout(()=>e.target.textContent="",1500);
        
    }

    return(
        <button onDoubleClick={(event)=>print_elevent(event)}>Click me</button>
    );
}



export default Button;