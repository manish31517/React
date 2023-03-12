
function Button(props){
    return <button onClick={props.onClickFunction}>+1
      </button>
    }
  
  
  //Display  
  function Display(props){
    return (
    <div>{props.message}</div>
      )
  }
  
  function App(){
     const [counter,setCounter] = useState(50)
     const increment = ()=>setCounter(counter+1)
     return (
       <div>
         <Button onClickFunction={increment} />
         <Display message={counter} />
       </div>
     )
  }
  
    ReactDOM.render(
       <App />,
       document.getElementById("mountNode"),
  )