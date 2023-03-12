function Button(){
    return React.createElement("button",null,"Test")
  }
  
  ReactDOM.render(
    React.createElement(Button,null),
     document.getElementById("mountNode"),
)