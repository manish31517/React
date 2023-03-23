import React from 'react';
import axios from 'axios';
class Form extends React.Component{
//  / userNameInput = React.createRef()
//     handleSubmit = (event)=> {
//         event.preventDefault();
//         console.log(this.userNameInput.current.value);
//     };
//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" placeholder="Github Username" 
//               ref={this.userNameInput}
//               />
//               <button>Add Card</button>

//             </form>
//         )
//     }

// Following code is similar to above commented code
   state = {userName : ''}
   handleSubmit = async (event)=> {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
       this.props.onSubmit(resp.data);
       this.setState({userName : ''})
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Github Username" 
              value={this.state.userName}
              onChange = { event => this.setState({userName : event.target.value})}
              />
    
              <button>Add Card</button>

            </form>
        )
    }
}

export default Form;