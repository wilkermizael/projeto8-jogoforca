
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
        props.setcorAlfabeto('cor-letraEnable')
        let novaArrayLista = [...arrayLista]; 
        props.setcor('')
        props.setcontErro(0)
        novaArrayLista.sort( item => Math.random(item) - 0.5)

        let arrayCaractere= novaArrayLista[1].split('');
        props.setminhapalavra(arrayCaractere);
        props.setHabilitar(""); 
        const arrayClicadaReset =[]
        props.setLetraClicada(arrayClicadaReset)
        const underline =arrayCaractere.map(()=>{
            return(' _')
        })
        props.setUnderline(underline)
        
}
    return (
        <div className="container">
            
            <div className="topo">    
                <div className="forca">
                    <img data-test="game-image" src={minhaimagem[props.contErro]} alt=""/>
                </div>
                <div className="asside-right">
                    <div className="btn-escolha">
                        <button data-test="choose-word" onClick={() => escolherPalavra(props.array)}>Escolher Palavra</button>
                    </div>
                    <div className="campo-palavra">
                        <div className="underline">
                            <p  data-test="word" className={`underline ${props.cor}`}>{props.underline}</p>
                
                        </div>
                    </div>

                </div>
            </div>
               
        </div>
    )

    
}
