import utils from "./util.js"
import {React,useEffect,useState} from "react";
import PlayNumber from "./PlayNumber.js";
import StarDisplay from "./StarDisplay.js";
import PlayAgain from "./PlayAgain.js";




const StartMatch = (props)=>{
    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    const[candidateNums, setCandidateNums] = useState([])
    const [secondLeft, setsecondLeft] = useState(10);
     
   
    useEffect(()=>{
        if(secondLeft > 0 && availableNums.length  >0){
              
        let timerID = setTimeout(()=>{
            setsecondLeft(secondLeft-1)
        },1000)

         return ()=>clearTimeout(timerID);
        }
    })

    const candidatesAreWrong = utils.sum(candidateNums) > stars
   
    const gameStatus = availableNums.length === 0 ? "won"
     : secondLeft === 0 ? 'lost' : 'active';
    
    const numberStatus = (number) => {
        if(!availableNums.includes(number)){
            return 'used';
        }
        
        if(candidateNums.includes(number)){
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    }
    // const resetGame = () => {
    //     setStars(utils.random(1,9))
    //     setAvailableNums(utils.range(1,9))
    //     setCandidateNums([])
    // }
   
    const onNumberClick = (number, currentStatus)=>{
          if(currentStatus === 'used' || gameStatus !== 'active'){
            return;
          }

          const newCandidateNums =
          currentStatus === 'available' ? candidateNums.concat(number):
           candidateNums.filter( cn => cn !== number);

          if(utils.sum(newCandidateNums) !== stars){
            setCandidateNums(newCandidateNums)
          }
          else{
              const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
              );
              
              setStars(utils.randomSumIN(newAvailableNums,9));
              setAvailableNums(newAvailableNums);
              setCandidateNums([])
          }
    }
    return (
        <div className="game">
           <div>
           Pick 1 or more number that sum to the number of stars
           </div>
           <div className="body">
            <div className="left">
                {
                  gameStatus !== 'active' ? (
                        <PlayAgain onClick = {props.startNewGame} gameStatus={gameStatus}/>
                    ) 
                    :(
                    <StarDisplay count={stars}/>
                )}
         {/* <StarDisplay count={stars}/>     */}
            </div>
            <div className="right">
                {utils.range(1,9).map(number =>
                <PlayNumber 
                key={number}
                number={number}
                status = {numberStatus(number)} 
                onClick = {onNumberClick}
                />
            )}
            </div>
           </div>
           <div className="timer">Time Remaining : {secondLeft}</div>
         </div>

    )
}

// const util={
//     range : (min,max)=>Array.from({length:max-min+1},(_,i)=>min+i)
// }
export default StartMatch