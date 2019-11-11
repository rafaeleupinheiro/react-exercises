import React from 'react'
import Son from './Son'

export default props => {
    const notifyExitSon = place => {
        alert(`Released for ${place}`)
    }

    return (
      <div>
        <Son notifyExit={notifyExitSon}/>
      </div>
    )
}