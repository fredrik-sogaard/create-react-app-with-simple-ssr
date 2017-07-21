import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import routes from '../../routes'
import './App.css'

const PropsRoute = ({
  location,
  component: Component,
  initialData,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => <Component {...props} initialData={initialData} />}
  />
)

class App extends Component {
  render () {
    return (
      <main className='h-100'>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <Switch key={location.key} location={location}>
                {routes.map((route, key) => {
                  return (
                    <CSSTransition
                      key={key}
                      classNames='example'
                      timeout={{ enter: 500, exit: 300 }}
                    >
                      <PropsRoute
                        {...route}
                        key={key}
                        initialData={this.props.initialData}
                      />
                    </CSSTransition>
                  )
                })}
              </Switch>
            </TransitionGroup>
          )}
        />
      </main>
    )
  }
}

export default App
