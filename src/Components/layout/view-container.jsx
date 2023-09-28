
export default function ViewContainer ({children, className}){
    return(
        <div className={`view-container ${className}`}>{children}</div>
    )
}

