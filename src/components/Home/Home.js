import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import styles from './Home.css'

const Home = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.photoCard }>
        <span>Patrick Kosnik</span>
      </div>
      <div className={ styles.infoCard }>
        <InfoCard
          headerText='Resume'
          infoText='Job history, experience, and technical skills'
          buttonText='Resume'
          url='/#/resume'
        />
      </div>
      <div className={ styles.infoCard }>
        <InfoCard className={ styles.infoCard }
          headerText='Contact'
          infoText='Information on how to get a hold of me'
          buttonText='Contact'
          url='/#/contact'
        />
      </div>
      {/* <div className={ styles.infoCard }>
        <InfoCard className={ styles.infoCard }
          headerText='Blog'
          infoText='Your typical blog, sharing some of my thoughts about the world'
          buttonText='Blog'
          url='/#/blog'
        />
      </div> */}
    </div>
  )
}

export default Home
