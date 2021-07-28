import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import CIcon from '@coreui/icons-react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
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
  const { account, campaign } = queryString.parse(search);

  const [data, setData] = useState([]);
  const [FNQuery, setFNData] = useState("");
  const [totalMessaged, setMess] = useState();
  const [totalRequests, setTR] = useState();
  const [totalAccepted, setTA] = useState();
  const [successPerc, setSP] = useState();
  const [responseRate, setRR] = useState();
  const [filterVal, setVal] = useState();
  
  const filterByRecentMessages = () => {
    setVal(1);
  }

  const filterByRecentConnections = () => {
    setVal(0);
  }


  //GET Request function to API
  const hitAPI = () => {
    fetch(`https://api.apispreadsheets.com/data/${account}/`)
      .then( res => {
        res.json().then(data => {
          setVal(1);
          setData(data.data);
          setMess(data.data[0].TotalMessaged);
          setTR(data.data[0].TotalRequests);
          setTA(data.data[0].TotalConnections);
          setSP(((data.data[0].TotalConnections / data.data[0].TotalRequests) * 100.0).toFixed(2));
          setRR(((data.data[0].TotalMessaged / data.data[0].TotalConnections) * 100).toFixed(2));
        })    
    })
  }

  //Calling the function on component mount
  useEffect(() => {
    hitAPI();
  }, []);

  function searchTable(rows){
    if (filterVal === 1){
      console.log(filterVal);
      return rows.slice().sort((a,b) => new Date(b.MessageTime) - new Date(a.MessageTime));
    }
    return rows.filter(row => row.FirstName.toLowerCase().indexOf(FNQuery) > -1);

  }


  return (
    <>
      <CCard className="lg-5">
        <CCardFooter>
      
          <CRow className="text-center">
            <CCol lg md>
              <CButton className="button-format" color="dark" variant="outline" size="lg" onClick={filterByRecentConnections}>
                <div className="text-large-emphasis">Connection Requests</div>
                <strong>{totalRequests} Requests</strong>
                <CProgress thin className="mt-2" precision={1} color="success" value={100} />
              </CButton>
            </CCol>
            <CCol lg md>
              <CButton className="button-format" color="dark" variant="outline" size="lg" onClick={filterByRecentConnections}>
                <div className="text-medium-emphasis">Connections Accepted</div>
                <strong>{totalAccepted} Accepted</strong>
                <CProgress thin className="mt-2" precision={1} color="info" value={successPerc} />
              </CButton>
            </CCol>
            <CCol lg md>
              <CButton className="button-format"  color="dark" variant="outline" size="lg" onClick={filterByRecentConnections}>
                <div className="text-medium-emphasis">Connection Success Rate</div>
                <strong>{successPerc}%</strong>
                <CProgress thin className="mt-2" precision={1} color="warning" value={successPerc} />
              </CButton>
            </CCol>
            <CCol lg md>
              <CButton className="button-format" color="dark" variant="outline" size="lg" onClick={filterByRecentMessages}>
                <div className="text-medium-emphasis">Messages Returned</div>
                <strong>{totalMessaged} Messaged</strong>
                <CProgress thin className="mt-2" precision={1} color="danger" value={totalMessaged} />
              </CButton>
            </CCol>
            <CCol lg md>
              <CButton className="button-format"  color="dark" variant="outline" size="lg" onClick={filterByRecentMessages}>
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
 
      </CInputGroup>
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CInputGroup className="mb-3">
              <CFormControl type="text" placeholder="Search By First Name: " value={FNQuery} onChange={(e) => setFNData(e.target.value)} />
            </CInputGroup>
            <CCardBody>
              <MDBTable scrollY maxHeight="500px" hover responsive align="middle" className="mb-0 border">
                <MDBTableHead color="light" className="text-left">
                  <CTableRow> 
                    <CTableHeaderCell><CIcon name='cil-people'></CIcon></CTableHeaderCell>
                    <CTableHeaderCell><span>Contact Information</span></CTableHeaderCell>
                    <CTableHeaderCell><span>Connected</span></CTableHeaderCell>
                    <CTableHeaderCell>LinkedIn Link</CTableHeaderCell>
                    <CTableHeaderCell>Message Thread</CTableHeaderCell>
                    <CTableHeaderCell>Lead Last Message</CTableHeaderCell>
                  </CTableRow>

                </MDBTableHead>


                <MDBTableBody>
                  {
                    Object.values(searchTable(data.slice(1, data.length))).map((item) => (
                      <CTableRow className="text-left">
                        <CAvatar className="col-xl col-lg col-md col-sm" size="xl" src={item.Picture}><CIcon size="xl" name="cil-user"></CIcon> </CAvatar> 
                        <CTableDataCell>
                          <div className="user-info font-style">
                            <strong>Name:</strong>  {item.FirstName} {item.LastName}
                          </div>
                          <div className="user-info font-style">
                            <span>
                              <strong>Company:</strong> {item.CompanyName}
                            </span>
                            <br />
                            <span className="fixed-width"> 
                              <strong>Title:</strong> {item.LeadTitle}
                            </span>
                            <br />
                            <span>
                              <strong>Email: </strong> {item.Email}
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
                          <a target="_blank" rel="noreferrer" href={item.ProfileLink}>
                            <CIcon size="xl" name="cib-linkedin" />
                          </a>
                        </CTableDataCell>
                        <CTableDataCell>
                          <a target="_blank" rel="noreferrer" href={item.MessageURL}>
                            <CIcon size="xl" name="cil-comment-square" />
                          </a>
                        </CTableDataCell>
                        <CTableDataCell>
                          <MDBInput className="box-width" type="textarea"  rows="4" value={item.MessageResponse}>  
                          </MDBInput>
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
