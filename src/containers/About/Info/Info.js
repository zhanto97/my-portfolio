import React from 'react'
import styles from './Info.module.css'
import email from './email.png'
import telephone from './telephone.png'
import github from './github-logo.png'
import linkedin from './linkedin-logo.png'

const info = (props) => {
    return (
        <div className={styles.Info}>
            <h1 style={{textAlign: 'center'}}>Wow! A whole page about me</h1>
            <p>I am a recent graduate of Korea Advanced Institute of Science and Technology (KAIST) specializing in computer science and mathematics.</p>
            <p>My passions are building big as well as scalable systems and breaking complex problems into simple, elegant and structured code.</p>
            <p>My techincal strengths are:</p>
            <ul>
                <li><p>Programming Languages: <strong>Python, C++, Javascript</strong></p></li>
                <li><p>Frameworks and Tools: <strong>Node.js, Django, Flask, React.js, Docker, GCP, Tensorflow, Git</strong></p></li>
                <li><p>Databases: <strong>PostgreSQL, MongoDB, Redis</strong></p></li>
            </ul>
            <p>Outside of my work, you can find me working out in the gym, reading a novel or practicing my guitar 😊</p>
            <p>Check out my Github and Linkedin pages to know more about me and my works.</p>
            <div className={styles.Contact}>
                <div className={styles.Block}> 
                    <a href="https://github.com/zhanto97" target="new">
                        <img src={github} alt="GitHub"></img>
                    </a>
                    <p>zhanto97</p>
                </div>
                <div className={styles.Block}> 
                    <a href="https://www.linkedin.com/in/zhanto/" target="new">
                        <img src={linkedin} alt="Linkedin"></img>
                    </a>
                    <p>zhanto</p>
                </div>
            </div>
            <div className={styles.Contact}>
                <div className={styles.Block}>
                    <img src={email} alt="Email"></img>
                    <p>zhanto97@gmail.com</p>
                </div>
                <div className={styles.Block}>
                    <img src={telephone} alt="Telephone"></img>
                    <p>+7 (775) 569 4216</p>
                </div>
            </div>
        </div>
    )
}

export default info