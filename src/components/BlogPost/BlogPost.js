import React from 'react'

import styles from './BlogPost.module.css'

const BlogPost = (props) => {
    return (
        <div className={styles.BlogPost}>
            {props.children}
        </div>
    )
}

export default BlogPost