import React from 'react'
import ReactDOM from 'react-dom'
import FirstComponent from './components/FirstCompoment'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <FirstComponent></FirstComponent>
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

