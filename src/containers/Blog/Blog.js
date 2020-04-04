import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'

import Preview from '../../components/Preview/Preview'
import BlogPost from '../../components/BlogPost/BlogPost'
import styles from './Blog.module.css'

const posts = {};

function importAll (r) {
    r.keys().forEach(key => posts[key] = r(key));
}
importAll(require.context('./Posts/', true, /\.md$/));

const Blog = (props) => {
    const [md, setMd] = useState([])
    useEffect(() => {
        for (let [key, value] of Object.entries(posts)) {
            fetch(value)
                .then((response) => response.text())
                .then((text) => {
                    setMd(md => [...md, text])
                })
        }
    }, [])
    
    const [selected, setSelected] = useState(-1)
    useEffect(() => {
        if (props.match.url === '/blog'){
            setSelected(-1)
        }
    }, [props.match.url])

    const postClickHandler = (id) => {
        setSelected(id)
    }

    if (selected !== -1){
        return (
            <div className={styles.Blog}>
                <BlogPost><Markdown source={md[selected]}></Markdown></BlogPost>
            </div>
        )
    }
    return (
        <div className={styles.Blog}>
            {md.map((post, index) => 
                <Preview 
                    key={index}
                    link={props.match.url + '/' + index}
                    clicked={() => postClickHandler(index)}>
                        <Markdown source={post}></Markdown>
                </Preview>)
            }
        </div>
    )
}

export default Blog