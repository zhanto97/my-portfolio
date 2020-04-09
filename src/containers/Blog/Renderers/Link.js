import React from 'react'

const Link = (props) => {
    const customStyle = {
        textDecoration: 'none',
        color: '#0366d6'
    }
    return (
        <a href={props.href} style={customStyle}>
            {props.children}
        </a>
    )
}

export default Link