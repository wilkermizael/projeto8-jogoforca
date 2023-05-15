import { useState } from "react"

export default function Letras(props){
    
    
    function clickLetra(item){
        
        
        let arrayClicado = [...props.letraClicada,item]
        props.setLetraClicada(arrayClicado)
        
        /*if(!props.habilitar){
            setcorAlfabeto('cor-letraEnable')
            alert('alerta')
        }*/
       
        const underline = props.minhapalavra.map((letra)=>{
            return( arrayClicado.includes(letra) ? letra : ' _' )
        })
        props.setUnderline(underline)
        let erroLetra = props.contErro
        if(!props.minhapalavra.includes(item)){
            erroLetra++
            //props.setcorAlfabeto('cor-letraDisabled')
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
        
        <button data-test="letter" key={item} className={`alfabeto ${props.corAlfabeto}`} disabled={props.habilitar ? true : props.letraClicada.includes(item) ? true : false } onClick={()=>clickLetra(item)}>{item.toUpperCase()}</button>)}
        
        </>
        
    )
}
