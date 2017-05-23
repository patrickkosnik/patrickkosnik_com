import React from 'react'
import styles from './Resume.css'

const Resume = () => (
  <div className={ styles.container }>
    <h1>Resume</h1>
    <div className={ styles.button }>
      <a href="http://patrickkosnik.com/resources/PatrickKosnikResume.pdf" target="_blank">Click Here for PDF version</a>
    </div>
  </div>
)

export default Resume
