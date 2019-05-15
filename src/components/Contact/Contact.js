import React from 'react'
import styles from './Contact.css'

const Contact = () => (
  <div className={ styles.container }>
      <h1>Contact Information</h1>
      <div className={ styles.content }>
      <div className={ styles.cardContainer }>
        <div className={ styles.photoCard }></div>
      </div>
      <div className={ styles.cardContainer }>
        <div className={ styles.card }>
          <h1>Email</h1>
          <p>patrickkosnik@gmail.com</p>
        </div>
      </div>
      <div className={ styles.cardContainer }>
        <div className={ styles.card }>
          <h1>Phone</h1>
          <p>(616) 666 - 1258</p>
        </div>
      </div>
      <div className={ styles.cardContainer }>
        <div className={ styles.card }>
          <h1>LinkedIn</h1>
          <div className={ styles.button }>
            <a href="http://www.linkedin.com/in/patrick-kosnik-52749469" target="_blank">Go >></a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
