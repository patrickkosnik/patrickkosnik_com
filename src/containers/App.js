import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import Nav from '../components/Nav/Nav'
import Contact from '../components/Contact/Contact'
import Resume from '../components/Resume/Resume'

const App = ({ selectedItems }) => (
  <HashRouter>
    <div>
    {console.log(selectedItems)}
    <Nav />
    <Route exact path='/' component={ Home } />
    <Route path='/blog' component={ Blog } />
    <Route path='/contact' component={ Contact } />
    <Route path='/resume' component={ Resume } />
    </div>
  </HashRouter>
)

export default App
