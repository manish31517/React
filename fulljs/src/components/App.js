import React, {useState} from 'react';

export default function App(){
    const [ count,setCount] = useState(0);
    return(
        <div>
            This is sample statefule and 
            server-side rendered React application
            <br /><br/>
            Here is a button that will track how many times you click on it
            <br/><br/>
            <button onClick={()=> setCount(count+1)}>{count}</button>
        </div>
    )
}