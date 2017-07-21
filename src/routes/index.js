// import asyncComponent from '../components/AsyncComponent/AsyncComponent'
import Home from '../containers/Home/Home'
import NoMatch from '../components/NoMatch/NoMatch'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    component: NoMatch
  }
]

export default routes
