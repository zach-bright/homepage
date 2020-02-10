import React from "react"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import ReactDOM from "react-dom";
import Footer from 'components/templates/Footer.jsx'
import Home from 'components/pages/Home.jsx'
import Resume from 'components/pages/Resume.jsx'
import 'styles/style.css'

const PAGES = [
  { path: '/resume', label: 'Resume', component: Resume }
]

export default function App() {
  let linkList = PAGES.map((page) => <li><Link to={page.path} className="router-link">{page.label}</Link></li>)
  let routeList = PAGES.map((page) => <Route path={page.path} component={page.component} />)
  return (
    <Router>
      <nav className="nav-container">
        <ul>
          <li><Link to='/' className='router-link'>Home</Link></li>
          {linkList}
        </ul>
      </nav>
      <Switch>
        <div className="content-container">
          <React.Fragment>
            <Route exact path='/' component={Home} /> 
            {routeList}
          </React.Fragment>
        </div>
      </Switch>
      <Footer />
    </Router>
  )
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
