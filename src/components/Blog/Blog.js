import React from 'react'
import BlogPost from '../BlogPost/BlogPost'
import styles from './Blog.css'
import blogPosts from './Blog.json'

const Blog = () => (
  <div className={ styles.container }>
  { console.log(blogPosts) }
    <h1>Blog</h1>
    <BlogPost />
  </div>
)

export default Blog
