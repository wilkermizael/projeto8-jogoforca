export default function Letras(props){
   
    return(
        <>
        {props.alfabeto.map((item)=> <button className="alfabeto">{item}</button>)}
        </>
    )
}