import React from 'react'
import styles from './Resume.css'

const Resume = () => (
  <div className={ styles.container }>
    <h1>Resume</h1>
    <div className={ styles.button }>
      <a href="http://patrickkosnik.com/resources/PatrickKosnikResume.pdf" target="_blank">Download</a>
    </div>
    <div className={styles.images}>
      <img src="http://patrickkosnik.com/images/PK_Resume.png"/>
      <img src="http://patrickkosnik.com/images/PK_Resume2.png"/>
    </div>
  </div>
)

export default Resume
