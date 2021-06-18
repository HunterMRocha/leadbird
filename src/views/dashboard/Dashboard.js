import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CFormControl,
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



const Dashboard = () => {

  const { search } = useLocation();
  const { client, account, campaign } = queryString.parse(search);

  // console.log("query: ", search);
  // console.log("client: ", client);
  // console.log("account #: ", account);
  // console.log("campaign: ", campaign);

  const [data, setData] = useState([]);

  //GET Request function to API
  const hitAPI = () => {
    fetch(`https://api.apispreadsheets.com/data/${account}/`)
      .then( res => {
        res.json().then(data => {
          setData(data.data);
        })    
    })
  }

  //Calling the function on component mount
  useEffect(() => {
    hitAPI();
  }, []);


  return (
    <>
      <CCard className="mb-5">
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-large-emphasis">Total Connection Requests</div>
                <strong>6 Requests</strong>
                <CProgress thin className="mt-3" precision={1} color="success" value={100} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Total Connections Accepted</div>
                <strong>4 Accepted</strong>
                <CProgress thin className="mt-2" precision={1} color="info" value={80} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Connection Success Percent</div>
                <strong>66.6%</strong>
                <CProgress thin className="mt-2" precision={1} color="warning" value={66.6} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Total Messages Returned</div>
                <strong>2 Messaged</strong>
                <CProgress thin className="mt-2" precision={1} color="danger" value={33.3} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Message Response Percent</div>
                <strong>33.3%</strong>
                <CProgress thin className="mt-2" precision={1} value={33.3} />
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>


    {/* User Info */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CInputGroup className="mb-3">
              <CFormControl
                placeholder="Missing Campaign Title..."
                aria-describedby="button-addon2"
                value={campaign}
                size="lg"
              />
              <CButton type="button" color="primary" id="button-addon2">
                <strong>Download Data</strong>
              </CButton>
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CFormControl placeholder="Search By Name: " />
            </CInputGroup>
            <CCardBody>
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>
                        <CIcon name='cil-people'></CIcon>
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                        <span>User Information</span>
                      </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      <span>Connected</span>
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">LinkedIn Link</CTableHeaderCell>
                    <CTableHeaderCell>Lead Last Message</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>


                <CTableBody>
                  {
                    Object.values(data).map((item) => (
                      <CTableRow>
                        <CAvatar class="col-lg-5 col-md-5 col-sm-5 col-xs-5" size = "lg" src={item.Picture} />
                        <CTableDataCell>
                          <div>
                            <strong>Name:</strong>  {item.FirstName} {item.LastName}
                          </div>
                          <div className="large text-large-emphasis">
                            <span>
                              <strong>Company:</strong> {item.CompanyName}
                            </span>
                            <br />
                            <span>
                              <strong>Title:</strong> {item.LeadTitle}
                            </span>
                            <br />
                            <span>
                              <strong>Connected On:</strong> {item.ConnectionDate}
                            </span>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <strong>{item.Connected}</strong>
                        </CTableDataCell>

                        <CTableDataCell className='text-center'> 
                          <a href={item.ProfileLink}>
                            <CIcon size="xl" name="cib-linkedin" />
                          </a>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CForm>
                            <div>
                              <CFormControl
                                component="textarea"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                placeholder="No Message Available"
                              >{item.MessageResponse}</CFormControl>
                            </div>
                          </CForm>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  }
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
