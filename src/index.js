import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './components/FirstComponent'
import {CompA, CompB as B } from './components/TwoComponents'
import MultiElement from './components/MultiElements'
import FamilySilva from './components/FamilySilva'
import Family from './components//Family'
import Member from './components//Member'
import FunctionWithComponent from './components/FunctionWithComponent'
import Father from './components/Father'
import ComponentClass from './components/ComponentClass'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <FirstComponent value="Good Morning!"></FirstComponent>

        <CompA value="Hello i'm A!"></CompA>
        <B value="Hello i'm B!"></B>

        <MultiElement/>

        <FamilySilva lastName="Silva"/>

        <Family lastName="Pereira">
            <Member name="Andre "></Member>
            <Member name="Mariana "></Member>
        </Family>

        <FunctionWithComponent/>

        <Father/>

        <ComponentClass/>
        <ComponentClass value="Component Class"/>

    </div>
, element)


// Using JSX
// ReactDOM.render(<h1>Hello Word</h1>, element)

// ReactDOM.render(
//     <ul>
//         <li>1) Pedro </li>
//         <li>2) Maria </li>
//         <li>3) Ana </li>
//     </ul>
//  , element)

 // Using Javascript
// const list = document.createElement('ul')

// var item = document.createElement('li')
// var text = document.createTextNode('1) Predo')
// item.appendChild(text)
// list.appendChild(item)

// var item = document.createElement('li')
// var text = document.createTextNode('2) Maria')
// item.appendChild(text)
// list.appendChild(item)

// var item = document.createElement('li')
// var text = document.createTextNode('3) Ana')
// item.appendChild(text)
// list.appendChild(item)

// const element = document.getElementById('root')
// element.appendChild(list)

