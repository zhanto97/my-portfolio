import React from 'react'
import Item from './Item/Item'

import styles from './Navigation.module.css'

const navigation = (props) => {
    return (
        <div className={styles.Navigation}>
            <div className={styles.Logo}>
                <Item link="/">Zhantore Orynbassarov</Item>
            </div>

            <div className={styles.Items}>
                <ul>
                    <li><Item link="about">About me</Item></li>
                    <li><Item link="blog">Blog</Item></li>
                    <li><Item link="projects">Projects</Item></li>
                </ul>
            </div>
        </div>
    )
}

export default navigation;