import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = (props) => {
    const customStyle = {
        backgroundColor: 'inherit',
        border: '2px solid rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 4px',
        fontSize: '17px',
        overflow: 'scroll'
    }
    return (
        <SyntaxHighlighter style={prism} customStyle={customStyle}>
            {props.value}
        </SyntaxHighlighter>
    )
}

export default CodeBlock