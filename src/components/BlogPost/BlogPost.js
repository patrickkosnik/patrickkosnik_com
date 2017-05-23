import React from 'react'
import styles from './BlogPost.css'

const BlogPost = () => (
  <div className={ styles.blogCard }>
      <h2>First Post (kind of)</h2>
    <div className={ styles.description }>
      <p>This will eventually contain my blog posts. Or at least I hope it does, once I decide either: <br/><br/>
        i)What to write about<br/>
        and/or <br/>
        ii) My writing is eloquent enough for the world to read. </p>
    </div>
  </div>
)

export default BlogPost
