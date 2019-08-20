import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import Nav from '@@Components/UI/Navigation'
import { MainPage } from '../../pages/MainPage/MainPage'
import List from '../../pages/List/List'
import { ComicsTable } from '../../pages/ComicsTable'


@withRouter
export class Container extends Component {

  changePathHandler = (path) =>
    !this.props.location.pathname.includes(path) && this.props.history.push(path)

  render () {
    return (
      <>
        <Nav.Navigation onClick={this.changePathHandler}>
          <Nav.NavItem path="/comics" label="Comics" />
          <Nav.NavItem path="/heroes" label="Heroes" />
          <Nav.NavItem path="/series" label="Series" />
        </Nav.Navigation>
        <div className="container">
          <Route path='/' exact component={MainPage}/>
          <Route path='/table/:page?/' exact component={ComicsTable}/>
          <Route path='/:section/:page?/' component={List}/>
        </div>
      </>
    )
  }
}
