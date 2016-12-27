import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App.js'
import About from './About.js'
import Repo from './Repo.js'
import Repos from './Repos.js'
import Home from "./Home.js"

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repo/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
  </Route>
)