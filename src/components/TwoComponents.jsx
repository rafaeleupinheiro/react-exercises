import React from 'react'

const CompA = props =>
    <h1>First Component: {props.value}</h1>

const CompB = props =>
    <h1>Second Component: {props.value}</h1>  
    
    
// export default function() {
//     return <p>teste</p>
// }

export default CompA

// Most used solution
export {CompA, CompB}    