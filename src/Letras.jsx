
export default function Letras(props){

    
    function clickLetra(item){
    
        
        
        let arrayClicado = [...props.letraClicada,item]
        props.setLetraClicada(arrayClicado)
        const underline = props.minhapalavra.map((letra)=>{
            return( arrayClicado.includes(letra) ? letra : ' _' )
        })
        props.setUnderline(underline)
        let erroLetra = props.contErro
        if(!props.minhapalavra.includes(item)){
            erroLetra++
        }
        if(erroLetra === 6){
            props.setHabilitar(true)
            props.setUnderline(props.minhapalavra)
            props.setcor('vermelho')
        }
        if(props.minhapalavra.toString() === underline.toString()){
            props.setHabilitar(true)
            props.setcor('verde')
        }
         
        props.setcontErro(erroLetra);
        console.log(erroLetra)
        
        console.log(props.minhapalavra)
}
    
    return(
        <>
        
        {props.alfabeto.map((item)=> 
        
        <button data-test="letter" key={item} className='alfabeto' disabled={props.habilitar ? true : props.letraClicada.includes(item) ? true : false } onClick={()=>clickLetra(item)}>{item.toUpperCase()}</button>)}
        
        </>
        
    )
}
