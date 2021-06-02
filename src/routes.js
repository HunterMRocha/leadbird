import React from 'react'

// examples

const Home = React.lazy(() => import('./views/pages/home/Home'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Register = React.lazy(() => import('./views/pages/register/Register')) 
const Login = React.lazy(() => import('./views/pages/login/Login')) 

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/register', name: "Register", component: Register },
  { path: '/login', name: "Login", component: Login }
]

export default routes
