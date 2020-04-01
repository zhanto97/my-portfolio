import React from 'react'
import Item from './Item/Item'

import styles from './Navigation.module.css'

const navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <div className={styles.Logo}>
                <Item>Zhantore</Item>
            </div>

            <div className={styles.Items}>
                <ul>
                    <li><Item>About me</Item></li>
                    <li><Item>Blog</Item></li>
                    <li><Item>Projects</Item></li>
                </ul>
            </div>
        </div>
    )
}

export default navigation;