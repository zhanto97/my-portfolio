import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import Preview from '../../components/Preview/Preview'
import BlogPost from '../../components/BlogPost/BlogPost'
import CodeBlock from './Renderers/CodeBlock'
import InlineCode from './Renderers/InlineCode'
import Link from './Renderers/Link'
import Image from './Renderers/Image'
import styles from './Blog.module.css'

const posts = {};
const collator = new Intl.Collator(undefined, {numeric: true})

function importAll (r) {
    r.keys().forEach(key => posts[key] = r(key));
}
importAll(require.context('./Posts/', true, /\.md$/));

const BlogPage = (props) => {
    const [md, setMd] = useState([])
    useEffect(() => {
        for (let [key, value] of Object.entries(posts)) {
            fetch(value)
                .then((response) => response.text())
                .then((text) => {
                    setMd(md => [...md, {key, text}])
                })
        }
    }, [])
    
    const [selected, setSelected] = useState(-1)
    useEffect(() => {
        if (props.match.url === '/blog'){
            setSelected(-1)
        }
        else if (props.match.url.startsWith('/blog/')){
            const index = props.match.url.lastIndexOf('/')
            const blogNumber = parseInt(props.match.url.substring(index + 1))
            if (!isNaN(blogNumber)){
                setSelected(blogNumber)
            }
            else{
                setSelected(-1)
            }
        }
    }, [props.match.url])

    const postClickHandler = (id) => {
        setSelected(id)
        props.history.push(props.match.url + '/' + id)
    }
    
    md.sort((a, b) => collator.compare(a.key, b.key))
    if (selected !== -1){
        return (
            <div className={styles.Blog}>
                <BlogPost>
                    <ReactMarkdown 
                        source={md[selected].text}
                        renderers={{
                            code: CodeBlock,
                            inlineCode: InlineCode,
                            link: Link,
                            image: Image}} />
                </BlogPost>
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
                        <ReactMarkdown source={post.text} renderers={{
                            code: CodeBlock,
                            inlineCode: InlineCode,
                            image: Image}} />
                </Preview>)
            }
        </div>
    )
}

export default BlogPage