import React from 'react'
import { withRouter } from 'react-router'
import { animate } from '../utils'


@withRouter
export class ScrollRestore extends React.Component {
  componentDidUpdate (prevProps) {
    const start = window.scrollY
    const isNotSameLocations = this.props.location.pathname !== prevProps.location.pathname

    if (!(isNotSameLocations && start > 0)) return

    animate({
      draw: (progress) => (window.scrollY > 0) && window.scrollTo(0, start - start * progress),
      timing: animate.linear,
      duration: animate.duration,
    })
  }

  render () {
    return this.props.children
  }
}
