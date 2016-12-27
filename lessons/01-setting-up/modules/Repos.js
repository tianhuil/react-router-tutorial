import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repo/${userName}/${repo}`
    browserHistory.push(path)
    console.log(path)
  },

  render() {
    return (<div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repo/reactjs/react-router">React Router</NavLink></li>
        <li><NavLink to="/repo/facebook/react">React</NavLink></li>
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="userName"/> / {' '}
        <input type="text" placeholder="repo"/> / {' '}
        <button type="submit">Go</button>
      </form>

      {this.props.children}
    </div>)
  }
})
