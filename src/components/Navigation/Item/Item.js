import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Item.module.css'

const item = (props) => {
    return (
        <div className={styles.Item}>
            <Link to={props.link}> {props.children} </Link>
        </div>
    )
}

export default item