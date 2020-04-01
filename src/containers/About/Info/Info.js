import React from 'react'
import styles from './Info.module.css'

const info = (props) => {
    return (
        <div className={styles.Info}>
            <h1>Wow! A whole page about me</h1>
            <p>I am a software engineer in his senior year at Korea Advanced Institute of Science and Technology (KAIST).</p>
            <p>I love breaking complex problems into simple, elegant and structured code.</p>
            <p>My techincal strengths are:</p>
            <ul>
                <li><p>qwerty</p></li>
                <li><p>asdfgh</p></li>
                <li><p>zxcvbn</p></li>
            </ul>
            <p>Outside of my work, you can find me working out in the gym, reading a novel or practicing my guitar</p>
            <p>My contact details go here</p>
        </div>
    )
}

export default info