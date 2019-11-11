import React from 'react'

const CompA = props =>
    <h1>First Component: {props.value}</h1>

const CompB = props =>
    <h1>Second Component: {props.value}</h1>  
    
export {CompA, CompB}    