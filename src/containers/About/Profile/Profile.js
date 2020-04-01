import React from 'react'
import profilePic from './Profile.jpg'
import styles from './Profile.module.css'

const profile = (props) => {
    return (
        <div className={styles.Profile}>
            <img src={profilePic} alt="Avatar"></img>
            <p>Zhantore Orynbassarov</p>
            <p>Software Engineer</p>
        </div>
    )
}

export default profile