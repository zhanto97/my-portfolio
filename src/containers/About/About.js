import React from 'react'

import styles from './About.module.css'
import Profile from './Profile/Profile'
import Info from './Info/Info'

const AboutPage = (props) => {
    return (
        <div className={styles.About}>
            <Profile />
            <Info />
        </div>
    )
}

export default AboutPage