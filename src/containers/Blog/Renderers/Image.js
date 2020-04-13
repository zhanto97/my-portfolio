import React from 'react'

const Image = (props) => {
    const customStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: '20px',
        marginBot: '20px'
    }
    console.log(props)
    return (
        <img src={props.src} alt="alt text" style={customStyle}>
            {props.children}
        </img>
    )
}

export default Image