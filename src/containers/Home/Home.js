import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class Home extends Component {
  static fetchData (match) {
    // going to want `match` in here for params, etc.
    return fetch('https://api.github.com/users/octocat').then(res => res.json())
  }

  constructor (props) {
    super(props)
    this.state = { ...this.props.initialData }
  }

  componentDidMount () {
    if (!this.props.initialData) {
      this.constructor
        .fetchData(this.props.match)
        .then(json => this.setState({ ...json }))
    }
  }

  render () {
    return (
      <article className='mw7 center tc sans-serif'>
        <h1>{this.state.name}</h1>
      </article>
    )
  }
}

export default Home
