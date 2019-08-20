import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import storage from '../storage/storage'

import Header from '../blocks/header/header'
import { Container } from '../blocks/container/container'
import { ScrollRestore } from '@@Components/UI/ScrollRestore'


const store = storage()

export const MyComicsApp = () => {
  return (
    <Provider store={ store }>
      <Router>
        <ScrollRestore>
          <div className="MyComicsApp">
            <Header />
            <Container />
          </div>
        </ScrollRestore>
      </Router>
    </Provider>
  )
}
