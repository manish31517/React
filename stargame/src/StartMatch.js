import utils from "./util.js"
import {React,useState} from "react";
import PlayNumber from "./PlayNumber.js";
import StarDisplay from "./StarDisplay.js";




const StartMatch = ()=>{
    const [stars,setStars] = useState(utils.random(1,9));
    const [availableNums,setAvailableNums] = useState(utils.range(1,9));
    const[candidateNums, setCandidateNums] = useState([])
    
    const candidatesAreWrong = utils.sum(candidateNums) > stars

    const numberStatus = (number) => {
        if(!availableNums.includes(number)){
            return 'used';
        }
        
        if(candidateNums.includes(number)){
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    }
   
    const onNumberClick = (number, currentStatus)=>{
          if(currentStatus == 'used'){
            return;
          }

          const newCandidateNums =
          currentStatus == 'available' ? candidateNums.concat(number):
           candidateNums.filter( cn => cn != number);

          if(utils.sum(newCandidateNums) != stars){
            setCandidateNums(newCandidateNums)
          }
          else{
              const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
              );
              console.log(utils.randomSumIN(newAvailableNums))
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
             <StarDisplay count={stars}/>    
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
         </div>

    )
}

// const util={
//     range : (min,max)=>Array.from({length:max-min+1},(_,i)=>min+i)
// }
export default StartMatch