import React, { Component } from 'react'


export class Accordeon extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.constructor.name}
      </div>
    )
  }
}
