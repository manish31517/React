import utils  from "./util"
const StarDisplay = (props)=>{
    return(
        <div>
            {utils.range(1,props.count).map(starId=>
            <div className="star" key={starId}></div>)}
        </div>
       
    )
}

export default StarDisplay;