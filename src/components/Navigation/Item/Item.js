import React from 'react'
import styles from './Item.module.css'

const item = (props) => {
    return (
        <div className={styles.Item}>
            <a href="/"> {props.children} </a>
        </div>
    )
}

export default item