import React from 'react'
import CardList from './Card.js' 
import Form from './Form.js';

const testData = [
   
  {
     "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
     "name": "jyoti",
     "company": "bny"
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
    "name":"manish",
    "company":"morgan stanley"
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/4?v=4",
    "name": "harsh",
    "company": "google"
  }
];


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state= {
  //     profile : testData
  //   };
  // }

  //below code is similar to above commented code but this is not part of officcial javascript program
   //here state is class variable 
  state = {
    // profile:testData
     profile : [],  
   }
  
   addNewProfile = (profileData)=> {
    // console.log('App',profileData/)
    this.setState(prevState=>({
      profile: [...prevState.profile,profileData]
    }));
   }
    render(){
      return (
        <div>
           <div className='header'>{this.props.title}</div>
           <Form onSubmit={this.addNewProfile} />
           <CardList profile={this.state.profile} />
        </div>
      );}
}

export default App;