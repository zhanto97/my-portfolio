import React from 'react'

const InlineCode = (props) => {
    const customStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.09)'
    }
    return (
        <span style={customStyle}>
            {props.value}
        </span>
    )
}

export default InlineCode