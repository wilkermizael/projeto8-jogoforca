
import { useState } from "react";
import imagem0 from "./assets/forca0.png"; 
export default function Jogo(props){
let [minhapalavra, setminhapalavra] = useState("");


function escolherPalavra(arrayLista,){
    // Salvando o array em nova variavel de maneira aleatória
        let novaArrayLista = [...arrayLista]; 
        novaArrayLista.sort( item => Math.random(item) - 0.5)
        
        setminhapalavra(novaArrayLista[1])
        //let numeroDeLetras = novaArrayLista[1].length;

}
    return (
        <div className="container">
            
            <div className="topo">    
                <div className="forca">
                    <img src={imagem0} alt=""/>
                </div>
                <div className="asside-right">
                    <div className="btn-escolha">
                        <button onClick={() => escolherPalavra(props.array)}>Escolher Palavra</button>
                    </div>
                    <div className="campo-palavra">
                        
                        <CampoPalavras tamanho={minhapalavra} />
                       
                    </div>

                </div>
            </div>
                <div className="escolha-letras">
                    
                </div>
        </div>
    )

    
}

function CampoPalavras(props){
    console.log( props.tamanho)
    let array = [];
    for (let i=0; i < props.tamanho.length; i++){
        array.push(i);
    }
    return(
        <>
        {array.map(() => <div className="linha"> </div>)}
        </>
    )
}
