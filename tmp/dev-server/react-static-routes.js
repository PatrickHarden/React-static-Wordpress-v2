

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { cleanPath } from 'react-static'

import t_0 from '../../src/singles/Post'
import t_1 from '../../src/pages/Blogs'
import t_2 from '../../src/singles/Event'
import t_3 from '../../src/pages/Events'
import t_4 from '../../src/singles/Store'
import t_5 from '../../src/pages/Stores'
import t_6 from '../../src/pages/Contact'
import t_7 from '../../src/singles/Page'
import t_8 from '../../src/pages/Home'
import t_9 from '../../src/pages/404'

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [
  t_0,
t_1,
t_2,
t_3,
t_4,
t_5,
t_6,
t_7,
t_8,
t_9
]

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 9
}

// Get template for given path
const getComponentForPath = path => {
  path = cleanPath(path)
  return global.componentsByTemplateID[global.templateIDsByPath[path]]
}

global.reactStaticGetComponentForPath = getComponentForPath
global.reactStaticRegisterTemplateIDForPath = (path, id) => {
  global.templateIDsByPath[path] = id
}

export default class Routes extends Component {
  render () {
    const { component: Comp, render, children } = this.props

    const getFullComponentForPath = path => {
      let Comp = getComponentForPath(path)
      let is404 = path === '404'
      if (!Comp) {
        is404 = true
        Comp = getComponentForPath('404')
      }
      return newProps => (
        Comp
          ? <Comp {...newProps} {...(is404 ? {is404: true} : {})} />
          : null
      )
    }

    const renderProps = {
      componentsByTemplateID: global.componentsByTemplateID,
      templateIDsByPath: global.templateIDsByPath,
      getComponentForPath: getFullComponentForPath
    }

    if (Comp) {
      return (
        <Comp
          {...renderProps}
        />
      )
    }

    if (render || children) {
      return (render || children)(renderProps)
    }

    // This is the default auto-routing renderer
    return (
      <Route path='*' render={props => {
        let Comp = getFullComponentForPath(props.location.pathname)
        // If Comp is used as a component here, it triggers React to re-mount the entire
        // component tree underneath during reconciliation, losing all internal state.
        // By unwrapping it here we keep the real, static component exposed directly to React.
        return Comp && Comp({ ...props, key: props.location.pathname })
      }} />
    )
  }
}

