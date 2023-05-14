import palavras from "./palavra"
import { useState } from "react";
import Jogo from "./Jogo"
import Letras from "./Letras"

export default function App (){
    let [minhapalavra, setminhapalavra] = useState("");
    let [minhaletra, setMinhaLetra] = useState('')
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [habilitar, setHabilitar] = useState("disabled")
    let [classeUnderline, setClasseUnderline] = useState("linha")
    let [posicao, setPosicao] = useState([]);
    let [letraClicada, setLetraClicada] = useState('')
    let [conteudo, setConteudo] = useState('')
    let [contadorImg, setContadorImg]=useState(0)
    return(
    
        <div className="container">
            <Jogo array={palavras} 
            minhapalavra={minhapalavra} 
            setminhapalavra={setminhapalavra} 
            setHabilitar={setHabilitar} 
            minhaletra={minhaletra} 
            setMinhaLetra={setMinhaLetra}
            classeUnderline={classeUnderline}
            setClasseUnderline={setClasseUnderline}
            posicao={posicao}
            setPosicao = {setPosicao}
            conteudo={conteudo}
            contadorImg={contadorImg}
            setContadorImg={setContadorImg}
            
            
            
            />

            <div className="escolha-letras">
                    <Letras  alfabeto = {alfabeto} 
                    habilitar={habilitar} 
                    setHabilitar={setHabilitar}
                    minhapalavra={minhapalavra}
                    setminhapalavra={setminhapalavra}
                    minhaletra={minhaletra} 
                    setMinhaLetra={setMinhaLetra} 
                    posicao={posicao}
                    setPosicao = {setPosicao}
                    letraClicada={letraClicada}
                    setLetraClicada={setLetraClicada}
                    setConteudo ={setConteudo}
                    />
                    
                    
            </div>
        </div>
    )
    
}