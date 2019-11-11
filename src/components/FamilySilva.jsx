import React from 'react'
import Member from './Member'

export default props =>
    <div>
        <Member name="Rafael " lastName={props.lastName}/>
        <Member name="Daniela " lastName={props.lastName}/>
        <Member name="Pedro " lastName={props.lastName}/>
        <Member name="Ana " lastName={props.lastName}/>
    </div>