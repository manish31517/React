import React from 'react'
import CardList from './Card.js' 

class App extends React.Component {
    render(){
      return (
        <div>
           <div className='header'>{this.props.title}</div>
           <CardList />
        </div>
      );}
}

export default App;