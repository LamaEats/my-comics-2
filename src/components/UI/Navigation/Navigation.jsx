import React, { Component, Children } from 'react'
import { withRouter } from 'react-router'

@withRouter
export class Navigation extends Component {
  static defaultProps = {
    onClick: () => {}
  }

  state = {
    activeIndex: -1,
    currentPath: ''
  }

  static getDerivedStateFromProps (props) {
    // return {
    //   activeIndex, currentPath
    // }
  }

  handleItemClick = (index) => (path) => {
    this.setState((state) => ({
      ...state,
      activeIndex: index
    }))

    this.props.onClick(path)
  }

  createNavItems = () => Children.map(this.props.children, (child, index) => {
    return React.createElement(child.type, {
      onClick: this.handleItemClick(index),
      active: index === this.state.activeIndex,
      ...child.props,
    }, child.children)
  }, null)

  render () {
    return (
      <nav className="Navigation">
        {this.createNavItems()}
      </nav>
    )
  }
}
