import React from 'react';

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
   handleSubmit = (event)=> {
        event.preventDefault();
        console.log(this.state.userName);
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