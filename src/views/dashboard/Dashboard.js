import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import CIcon from '@coreui/icons-react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CFormCheck,
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
          setData(data.data);
          setMess(data.data[0].TotalMessaged);
          setTR(data.data[0].TotalRequests);
          setTA(data.data[0].TotalConnections);
          setSP(((data.data[0].TotalConnections / data.data[0].TotalRequests) * 100.0).toFixed(2))
          setRR(((data.data[0].TotalMessaged / data.data[0].TotalConnections) * 100).toFixed(2))
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
      <CCard className="lg-5">
        <CCardFooter>
          <CRow className="text-center">
            <CCol lg md sm="12" className="lg-mb-sm-2 mb-0">
              <CButton className="button-format" color="dark" variant="outline" size="lg">
                <div className="text-large-emphasis">Connection Requests</div>
                <strong>{totalRequests} Requests</strong>
                <CProgress thin className="mt-2" precision={1} color="success" value={100} />
              </CButton>
            </CCol>
            <CCol lg md sm="12" className="lg-mb-sm-2 mb-0">
              <CButton className="button-format" color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Connections Accepted</div>
                <strong>{totalAccepted} Accepted</strong>
                <CProgress thin className="mt-2" precision={1} color="info" value={successPerc} />
              </CButton>
            </CCol>
            <CCol lg md sm="12" className="lg-mb-sm-2 mb-0">
              <CButton className="button-format"  color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Connection Success Rate</div>
                <strong>{successPerc}%</strong>
                <CProgress thin className="mt-2" precision={1} color="warning" value={successPerc} />
              </CButton>
            </CCol>
            <CCol lg md sm="12" className="lg-mb-sm-2 mb-0">
              <CButton className="button-format" color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Messages Returned</div>
                <strong>{totalMessaged} Messaged</strong>
                <CProgress thin className="mt-2" precision={1} color="danger" value={totalMessaged} />
              </CButton>
            </CCol>
            <CCol lg md sm="12" className="lg-mb-sm-2 mb-0">
              <CButton className="button-format"  color="dark" variant="outline" size="lg">
                <div className="text-medium-emphasis">Message Response Rate</div>
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
        {/* <CButton type="button" color="primary" id="button-addon2">
          <strong>Download Data</strong>
        </CButton> */}
      </CInputGroup>
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CInputGroup className="mb-3">
              <CFormControl type="text" placeholder="Search By First Name: " value={q} onChange={(e) => setQ(e.target.value)} />
            </CInputGroup>
            <CCardBody>
              <MDBTable scrollY maxHeight="500px" hover responsive align="middle" className="mb-0 border">
                <MDBTableHead color="dark" className="text-left">
                  <CTableRow className="fix-head"> 
                    <CTableHeaderCell><CIcon name='cil-people'></CIcon></CTableHeaderCell>
                    <CTableHeaderCell><span>Contact Information</span></CTableHeaderCell>
                    <CTableHeaderCell><span>Connected</span></CTableHeaderCell>
                    <CTableHeaderCell>LinkedIn Link</CTableHeaderCell>
                    <CTableHeaderCell>Message Thread</CTableHeaderCell>
                    <CTableHeaderCell>Lead Last Message</CTableHeaderCell>
                  </CTableRow>

                </MDBTableHead>


                <MDBTableBody className="fix-body">
                  {
                    Object.values(searchTable(data.slice(1, data.length))).map((item) => (
                     
                      <CTableRow className="text-left">
                        <CAvatar className="col-xl col-lg col-md col-sm" size = "xl" src={item.Picture} />
                        <CTableDataCell>
                          <div className="user-info">
                            <strong>Name:</strong>  {item.FirstName} {item.LastName}
                          </div>
                          <div className="user-info">
                            <span>
                              <strong>Company:</strong> {item.CompanyName}
                            </span>
                            <br />
                            <span className="fixed-width"> 
                              <strong>Title:</strong> {item.LeadTitle}
                            </span>
                            <br />
                            <span>
                              <strong>Connected On:</strong> {item.ConnectionDateProperFormat}
                            </span>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <MDBInput type="checkbox" checked={item.Connected} />
                        </CTableDataCell>
                        <CTableDataCell> 
                          <a target="_blank" href={item.ProfileLink}>
                            <CIcon size="xl" name="cib-linkedin" />
                          </a>
                        </CTableDataCell>
                        <CTableDataCell>
                          <a target="_blank" href={item.MessageURL}>
                            <CIcon size="xl" name="cil-comment-square" />
                          </a>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CForm>
                            <div className="box-width">
                              <CFormControl
                                component="textarea"
                                id="exampleFormControlTextarea1"
                                rows="5"
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
