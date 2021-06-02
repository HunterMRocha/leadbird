import React from 'react'

import {
  CCard,
  CCol,
  CCardFooter,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const Home = () => {
  return (
	  <>
      
      <CCard className="mb-4">
          <CCardFooter>
            <CRow className="text-center">
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-medium-emphasis">Connection Requests</div>
                <strong>6 Requests</strong>
                <CProgress thin className="mt-2" precision={1} color="success" value={100} />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-medium-emphasis">Connections Accepted</div>
                <strong>4 Accepted</strong>
                <CProgress thin className="mt-2" precision={1} color="info" value={80} />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-medium-emphasis">Connection Success Percent</div>
                <strong>66.6%</strong>
                <CProgress thin className="mt-2" precision={1} color="warning" value={66.6} />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-medium-emphasis">Messages Sent</div>
                <strong>6 Messaged</strong>
                <CProgress thin className="mt-2" precision={1} color="danger" value={100} />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-medium-emphasis">Message Response Percent</div>
                <strong>33.3%</strong>
                <CProgress thin className="mt-2" precision={1} value={33.3} />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
    </>
	)
}

export default Home