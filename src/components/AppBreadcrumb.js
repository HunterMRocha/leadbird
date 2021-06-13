import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  // const currentLocation = useLocation().pathname


  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/">Dashboard</CBreadcrumbItem>
      <CBreadcrumbItem href="/home">Home</CBreadcrumbItem>
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
