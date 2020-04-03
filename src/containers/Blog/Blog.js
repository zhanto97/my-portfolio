import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'
import Preview from '../../components/Preview/Preview'
import styles from './Blog.module.css'

const posts = {};

function importAll (r) {
    r.keys().forEach(key => posts[key] = r(key));
}
importAll(require.context('./Posts/', true, /\.md$/));

const Blog = (props) => {
    const [md, setMd] = useState([]);

    useEffect(() => {
        for (let [key, value] of Object.entries(posts)) {
            fetch(value)
                .then((response) => response.text())
                .then((text) => {
                    setMd(md => [...md, text])
                })
        }
    }, [])

    // console.log(md)
    return (
        <div className={styles.Blog}>
            {md.map((post, index) => <Preview key={index}><Markdown source={post}></Markdown></Preview>)}
        </div>
    )
}

export default Blog