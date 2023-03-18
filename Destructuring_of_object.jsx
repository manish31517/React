
const {PI,E} = Math //this is distructuring of object
const circle = {
    label : 'circle',
    radius : 2,
}

const circleArea = ({radius},{precision=2}={})=> (PI*radius*radius).toFixed(2) //this is example of distructuring of circle

console.log(circleArea(circle,precision=5))