import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch({ type: 'set', sidebarShow: false })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src="data:image/png;base64,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" alt="LeadBird" width="100%" height="100%" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <CCreateNavItem items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
