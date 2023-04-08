import { useState } from "react"
import StartMatch from "./StartMatch"

const Game = ()=>{
    const [ gameId, setGameId] = useState(1);
    return (
        <StartMatch key={gameId} startNewGame = {()=>setGameId(gameId+1)}/>

    );
}
    

export default Game;