import React, {Component} from 'react'
import styles from './Nav.css'


class Nav extends Component {
  constructor() {
    super()
    this.state = {
      sideNavClass: styles.collapsed,
      toggle: 1
    }
  }
  toggleCollapse() {
    if (this.state.toggle === 1) {
      this.setState(
        {
          sideNavClass: styles.opened,
          toggle: 0
        }
      )
    } else {
      this.setState(
        {
          sideNavClass: styles.collapsed,
          toggle: 1
        }
      )
    }
  }
  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.menu } onClick={ this.toggleCollapse.bind(this) }>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        </div>
        <div className={ this.state.sideNavClass }>
          <div className={ styles.close } onClick={ this.toggleCollapse.bind(this) }>
          <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          </div>
          <ul className={ styles.navList }>
            <li><a href='/#/' onClick={ this.toggleCollapse.bind(this) }>Home</a></li>
            {/* <li><a href='/#/blog' onClick={ this.toggleCollapse.bind(this) }>Blog</a></li> */}
            <li><a href='/#/resume' onClick={ this.toggleCollapse.bind(this) }>Resume</a></li>
            <li><a href='/#/contact' onClick={ this.toggleCollapse.bind(this) }>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
