import { useState } from "react"


export default function Letras(props){
    let [liberar, setLiberar] = useState(true)
    let [incluir, setIncluir] = useState("")
    let letraClicada='';
    let palavraAnalisada =[]
    //const arrayEscolhas = [];
    let objetoDeButtons=[];
   
    
    function renderirarNaTela(palavraAnalisada, letraClicada){
        let minhaposicao = [];
        if(palavraAnalisada.includes(letraClicada[0])){
            for(let j = 0; j< palavraAnalisada.length ; j++){
            
                if(palavraAnalisada[j].includes(letraClicada[0])){
                    minhaposicao.push(j)
                    props.setPosicao(minhaposicao);
                    console.log(minhaposicao)
    
                    props.setConteudo(letraClicada)
                    
                }
            }
        }
    }
    
    function clickLetra(i, props){
    
        
        let novaArrayButton = [...objetoDeButtons]
        //let minhaposicao = [];

        letraClicada= [novaArrayButton[0].props.children[i].props.children];
        letraClicada.toString('')
        props.setLetraClicada(letraClicada)
        palavraAnalisada= [...props.minhapalavra]
        
        
        console.log(props.minhapalavra)
        console.log(letraClicada)
        
        renderirarNaTela(palavraAnalisada,letraClicada)
    
}

    objetoDeButtons =[
        <>
    {props.alfabeto.map((item,index)=> 
        
    <button key={index} className='alfabeto' disabled={liberar={liberar} ? props.habilitar :{incluir}} onClick={()=>clickLetra(index,props)}>{item}</button>)}
        </>
    ]
    
    return(
        <>
        
        {objetoDeButtons}
        
        </>
        
    )
}



//disabled={props.habilitar ? "disabled" : ""}
//onClick={()=>clickLetra(index, props)}