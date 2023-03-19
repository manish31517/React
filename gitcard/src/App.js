import React from 'react'
import Card from './Card.js' 
class App extends React.Component {
    render(){
      return (
        <div>
           <div className='header'>{this.props.title}</div>
           <Card />
        </div>
      );}
}

export default App;