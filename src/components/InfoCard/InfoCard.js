import React from 'react'
import styles from './InfoCard.css'

const InfoCard = ({headerText, infoText, buttonText, url}) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.card }>
        <h1>{ headerText }</h1>
        <div className={ styles.description }>
          <p>{ infoText }</p>
        </div>
        <div className={ styles.button }>
          <a href={ url }>{ buttonText }</a>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
