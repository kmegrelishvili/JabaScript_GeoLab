import "./form.css"

export default function Button ({
    children,
    type, 
    onClick, 
    buttonStyle,
    ...props
}){ 
    return (
    <button onClick={onClick} type={type} className={`btn ${buttonStyle ? buttonStyle:""}`}> 
    {children} 
    </button>
    )
}




