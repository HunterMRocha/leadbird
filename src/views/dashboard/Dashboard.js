import React from 'react'

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CDataTable,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormControl,
  CFormCheck,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Dashboard = () => {

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
            <CInputGroup className="mb-3">
              <CFormControl placeholder="Search By Name: " />
              <CDropdown>
                <CDropdownToggle color="secondary">Filter By</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Connections Messaged</CDropdownItem>
                  <CDropdownItem href="#">Connections Accepted</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CInputGroup>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon name="cil-people" />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Users</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      <span>Connections Accepted</span>
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      <span>Connections Messaged</span>
                    </CTableHeaderCell>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
                    </CTableDataCell>
                    <CTableDataCell>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
                    </CTableDataCell>
                    <CTableDataCell>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
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
                      <a href="https://www.linkedin.com/in/huntermacias/">
                        <CIcon size="xl" name="cib-linkedin" />
                      </a>
                    </CTableDataCell>
                    <CTableDataCell>
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
