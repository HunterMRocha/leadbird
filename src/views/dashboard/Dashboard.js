import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormControl,
  CFormCheck,
  CFormLabel,
  CFormRange,
  CInputGroup,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetSimple,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'

const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Connection Requests</div>
              <strong>1500</strong>
              <CProgress thin className="mt-2" precision={1} color="success" value={40} />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Connections Made</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={40} />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Connection Success %</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress thin className="mt-2" precision={1} color="warning" value={40} />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Messages Sent</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={40} />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Message Response Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress thin className="mt-2" precision={1} value={40} />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CInputGroup className="mb-3">
              <CFormControl
                placeholder="Enter Document Name Here..."
                aria-describedby="button-addon2"
              />
              <CButton type="button" color="primary" id="button-addon2">
                <strong>Download Data</strong>
              </CButton>
            </CInputGroup>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon name="cil-people" />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Users</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Accepted</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Messaged</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">LinkedIn Link</CTableHeaderCell>
                    <CTableHeaderCell>Lead Interests</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/1.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>Yiorgos Avraamu</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> SOMOS Community Case
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Director Of Practice Operations
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-mastercard" />
                    </CTableDataCell>
                    <CTableDataCell>
                      {/* <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel> */}
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/2.jpg" status="danger" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>Avram Tarasios</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> PWC Insurance
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Regulatory Affairs Associate
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-visa" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/3.jpg" status="warning" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>Quintin Ed</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> Williamsburg Pediatric Dental
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Practice Manager
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-stripe" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/4.jpg" status="secondary" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>Enéas Kwadwo</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> One Medical
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Office Manager
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-paypal" />
                    </CTableDataCell>
                    <CTableDataCell>
                      {/* <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel> */}
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/5.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>Apapetus Tadeáš</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> PSEG Long Island
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Executive Assistant To Chief Medical Officer
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-apple-pay" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/6.jpg" status="danger" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <strong>David Maurici</strong>
                      </div>
                      <div className="small text-medium-emphasis">
                        <span>
                          <strong>Company:</strong> New York State Office of Mental Health
                        </span>
                        <br />
                        <span>
                          <strong>Title: </strong> Manager, Executive Office and Medical Education
                        </span>
                        <br />
                        <span>
                          <strong>Connected On:</strong> Jan 1, 2021
                        </span>
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormCheck id="flexCheckDefault" />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-amex" />
                    </CTableDataCell>
                    <CTableDataCell>
                      {/* <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel> */}
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
