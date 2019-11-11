import React from 'react'

export default props =>
<div>
    <button onClick={() => props.notifyExit('Shopping Mall')}>
        I'll go out!
    </button>
</div>