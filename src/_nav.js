import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: "CNavItem",
    as: NavLink, 
    anchor: "Register",
    to: "/register",
    icon: <CIcon name="cil-spreadsheet" customClasses="nav-icon" />,
  },
  {
    _component: "CNavItem",
    as: NavLink, 
    anchor: "Login",
    to: "/login",
    icon: <CIcon name="cil-user" customClasses="nav-icon" />,
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Home",
    to: "/home",
    icon: <CIcon name="cil-home" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
