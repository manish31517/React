import React from 'react'


const CardList = (props)=>{
    // return (
    //     <div>
    //     /*<Card {...testData[0]}/>
    //     <Card {...testData[1]}/>
    //    */
    // </div>
    // );

    //following code is equal to above commented code
    return (
        <div>
            {props.profile.map(profile=> <Card {...profile}/>)}
        </div>
    )
 }


class Card extends React.Component{
    render(){
        // const profile = testData[0];
          const profile = this.props; 
        return (<div className='github-profile'>
            <img src={profile.avatar_url}/>
            <div className='info'>
                <div className='name'>{profile.name}</div>
                <div className='company'>{profile.company}</div>
            </div>
        </div>
        );
    }
}

export default  CardList
