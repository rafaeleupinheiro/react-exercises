import React from 'react'

export default props =>
    <div>
        {React.Children.map(props.children, son => {
            return React.cloneElement(son, { ...props })
        })}
        {/*props.children*/}
    </div>