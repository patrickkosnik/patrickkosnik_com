import React, {Component} from 'react'
import styles from './Nav.css'
import Menu from '../../../public/images/Menu.svg'
import Close from '../../../public/images/Close.svg'

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
        <Menu className={ styles.menu } onClick={ this.toggleCollapse.bind(this) }/>
        <div className={ this.state.sideNavClass }>
          <Close className={ styles.close } onClick={ this.toggleCollapse.bind(this) }/>
          <ul className={ styles.navList }>
            <li><a href='/#/' onClick={ this.toggleCollapse.bind(this) }>Home</a></li>
            <li><a href='/#/blog' onClick={ this.toggleCollapse.bind(this) }>Blog</a></li>
            <li><a href='/#/resume' onClick={ this.toggleCollapse.bind(this) }>Resume</a></li>
            <li><a href='/#/contact' onClick={ this.toggleCollapse.bind(this) }>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
