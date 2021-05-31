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
  CFormCheck,
  CFormLabel,
  CFormRange,
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
            <CCardHeader>User Information</CCardHeader>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon name="cil-people" />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Users</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">LinkedIn Link</CTableHeaderCell>
                    <CTableHeaderCell>Good Lead? (check box)</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/1.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-us" title="us" id="us" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>50%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="success" value={50} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-mastercard" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/2.jpg" status="danger" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Avram Tarasios</div>
                      <div className="small text-medium-emphasis">
                        <span>Recurring</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-br" title="br" id="br" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>10%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="info" value={10} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-visa" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/3.jpg" status="warning" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Quintin Ed</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-in" title="in" id="in" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>74%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="warning" value={74} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-stripe" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/4.jpg" status="secondary" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-fr" title="fr" id="fr" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>98%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="danger" value={98} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-paypal" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/5.jpg" status="success" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-es" title="es" id="es" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>22%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="info" value={22} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-apple-pay" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
                      <CFormRange id="customRange1" />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell className="text-center">
                      <CAvatar size="md" src="avatars/6.jpg" status="danger" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>Hunter Macias</div>
                      <div className="small text-medium-emphasis">
                        <span>New</span> | Connected: Jan 1, 2021
                      </div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cif-pl" title="pl" id="pl" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>43%</strong>
                        </div>
                        <div className="float-end">
                          <small className="text-medium-emphasis">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <CProgress thin color="success" value={43} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CIcon size="xl" name="cib-cc-amex" />
                    </CTableDataCell>
                    <CTableDataCell>
                      {/* <CFormCheck id="flexCheckDefault" label="Followed Up" /> */}
                      <CFormLabel htmlFor="customRange1">Lead Interest</CFormLabel>
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
