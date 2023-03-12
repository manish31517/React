
function Button(props){
    const handle=()=>props.onClickFunction(props.increment)
    return <button onClick={handle}>+{props.increment}
      </button>
    }
  
  
  //Display  
  function Display(props){
    return (
    <div>{props.message}</div>
      )
  }
  
  function App(){
     const [counter,setCounter] = useState(0)
     const increment = (incrementValue)=>setCounter(counter+incrementValue)
     return (
       <div>
         <Button onClickFunction={increment} increment={1}/>
          <Button onClickFunction={increment} increment={2}/>
          <Button onClickFunction={increment} increment={3}/>
          <Button onClickFunction={increment} increment={4}/>
         
         
         
         <Display message={counter} />
       </div>
     )
  }
  
    ReactDOM.render(
       <App />,
       document.getElementById("mountNode"),
  )