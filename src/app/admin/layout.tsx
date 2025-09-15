export default function Adminlayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <div>
            <h1>this is adminlayout</h1>
            {children}
        </div>
    )
}