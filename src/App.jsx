import palavras from "./palavra"
import { useState } from "react";
import Jogo from "./Jogo"
import Letras from "./Letras"

export default function App (){
    let [minhapalavra, setminhapalavra] = useState("");
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
    
        <div className="container">
            <Jogo array={palavras} minhapalavra={minhapalavra} setminhapalavra={setminhapalavra}/>

            <div className="escolha-letras">
                    <Letras alfabeto = {alfabeto}/>
            </div>
        </div>
    )
    
}