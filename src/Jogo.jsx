
//import { useState } from "react";
import imagem0 from "./assets/forca0.png";
import imagem1 from "./assets/forca1.png";
import imagem2 from "./assets/forca2.png";
import imagem3 from "./assets/forca3.png";
import imagem4 from "./assets/forca4.png";
import imagem5 from "./assets/forca5.png";
import imagem6 from "./assets/forca6.png";
const minhaimagem =[imagem0, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]

export default function Jogo(props){

function escolherPalavra(arrayLista){
    // Salvando o array em nova variavel de maneira aleatória
        let novaArrayLista = [...arrayLista]; 
        novaArrayLista.sort( item => Math.random(item) - 0.5)

        let arrayCaractere= novaArrayLista[1].split('');
        props.setminhapalavra(arrayCaractere);
        props.setHabilitar(""); 
        
        
}
    return (
        <div className="container">
            
            <div className="topo">    
                <div className="forca">
                    <img src={minhaimagem[0]} alt=""/>
                </div>
                <div className="asside-right">
                    <div className="btn-escolha">
                        <button onClick={() => escolherPalavra(props.array)}>Escolher Palavra</button>
                    </div>
                    <div className="campo-palavra">
                        
                        <CampoPalavras tamanho={props.minhapalavra}  
                        linha={props.classeUnderline} 
                        setCampoUnderline={props.setCampoUnderline} 
                        campoUnderline={props.campoUnderline}
                        posicao={props.posicao}
                        conteudo={props.conteudo}
                        mudaLetra={props.mudaLetra}
                        setMudaLetra={props.setMudaLetra}
                        setminhapalavra={props.setminhapalavra}
                        />
                        
                       
                    </div>

                </div>
            </div>
               
        </div>
    )

    
}

function CampoPalavras(props){
    //console.log( props.tamanho)
    let array = [];
    let underline = [];
    for (let i=0; i < props.tamanho.length; i++){
        array.push(i);
    }
   let posicao = props.posicao
   //console.log(posicao)
    //Limpar a palavra
    

   underline=[
        <>
        {array.map((item) => <div key={item} className={props.linha}>{props.conteudo}</div>)}
        </>
        ]
        for(let i = 0; i< posicao.length; i++){
            
            console.log(underline[0].props.children[posicao[i]].props.children[0])
        }
    
    
    return(
        <>
        {underline}
        </>
    )
  
}
