import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Register = React.lazy(() => import('./views/pages/register/Register'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="./views/pages/register/Register" name="Register" render={(props) => <DefaultLayout {...props} />} />
            <Route path="" name="Home" render={(props) => <DefaultLayout {...props} />} />
            {/* <Route path="./views/dashboard/Dashboard" name="Dashboard" render={(props) => <DefaultLayout {...props} />} /> */}
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
