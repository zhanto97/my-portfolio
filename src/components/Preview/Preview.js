import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Preview.module.css'

const preview = (props) => {
    return (
        <div className={styles.Preview}>
            <Link to={props.link} onClick={props.clicked}>
                {props.children}
            </Link>
        </div>
    )
}

export default preview