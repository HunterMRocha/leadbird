import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import CIcon from '@coreui/icons-react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
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
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

require("es6-promise").polyfill();
require("isomorphic-fetch");



const Dashboard = () => {


  const { search } = useLocation();
  const { client, account, campaign } = queryString.parse(search);

  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [totalMessaged, setMess] = useState();
  const [totalRequests, setTR] = useState();
  const [totalAccepted, setTA] = useState();
  const [successPerc, setSP] = useState();
  const [responseRate, setRR] = useState();



  //GET Request function to API
  const hitAPI = () => {
    fetch(`https://api.apispreadsheets.com/data/${account}/`)
      .then( res => {
        res.json().then(data => {
          setMess(data.data[0].TotalMessaged);
          setTR(data.data[0].TotalRequests);
          setTA(data.data[0].TotalConnections);
          setSP(((data.data[0].TotalConnections / data.data[0].TotalRequests) * 100.0).toFixed(2))
          setRR(((data.data[0].TotalMessaged / data.data[0].TotalConnections) * 100).toFixed(2))
          setData(data.data);
        })    
    })
  }

  //Calling the function on component mount
  useEffect(() => {
    hitAPI();
  }, []);

  function searchTable(rows){
    return rows.filter(row => row.FirstName.toLowerCase().indexOf(q) > -1)
  }


  return (
    <>
      <CCard className="mb-5">
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-large-emphasis">Total Connection Requests</div>
                <strong>{totalRequests} Requests</strong>
                <CProgress thin className="mt-3" precision={1} color="success" value={100} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Total Connections Accepted</div>
                <strong>{totalAccepted} Accepted</strong>
                <CProgress thin className="mt-2" precision={1} color="info" value={successPerc} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Connection Success Percent</div>
                <strong>{successPerc}%</strong>
                <CProgress thin className="mt-2" precision={1} color="warning" value={successPerc} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Total Messages Returned</div>
                <strong>{totalMessaged} Messaged</strong>
                <CProgress thin className="mt-2" precision={1} color="danger" value={totalMessaged} />
              </CButton>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <CButton color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Message Response Percent</div>
                <strong>{responseRate}%</strong>
                <CProgress thin className="mt-2" precision={1} value={responseRate} />
              </CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>


    {/* User Info */}
      <CInputGroup className="mb-3">
        <CFormControl
          placeholder="Missing Campaign Title..."
          value={"campaign title: " + campaign}
          size="lg"
        />
        <CButton type="button" color="primary" id="button-addon2">
          <strong>Download Data</strong>
        </CButton>
      </CInputGroup>
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CInputGroup className="mb-3">
              <CFormControl type="text" placeholder="Search By First Name: " value={q} onChange={(e) => setQ(e.target.value)} />
            </CInputGroup>
            <CCardBody>
              <MDBTable scrollY maxHeight="500px" hover responsive align="middle" className="mb-0 border">
                <MDBTableHead color="light">
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
                </MDBTableHead>


                <MDBTableBody background="yellow">
                  {
                    Object.values(searchTable(data)).map((item) => (
                     
                      <CTableRow>
                        <CAvatar className="col-xl col-lg col-md col-sm" size = "xl" src={item.Picture} />
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
                </MDBTableBody>
              </MDBTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
