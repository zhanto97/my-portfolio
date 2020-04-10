import React from 'react'

import styles from './Preview.module.css'

const preview = (props) => {
    return (
        <div className={styles.Preview} onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default preview