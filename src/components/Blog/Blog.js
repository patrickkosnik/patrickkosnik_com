import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import styles from './Blog.css'

const Blog = () => (
  <div className={ styles.container }>
    <h1>Blog</h1>
    <BlogPost />
  </div>
)

export default Blog
