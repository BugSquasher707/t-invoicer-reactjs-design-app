import React, { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"
import $ from 'jquery'
import { Container, Row, Col } from "react-bootstrap"
import { AiOutlinePieChart, AiOutlineBank, AiOutlineBarChart, AiOutlineFileText, AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

import UpperLogin from "../UpperLogin/UpperLogin";
import SecondSection from "../SecondSection/SecondSection";
import Dashboard from "../Dashboard/Dashboard";
import InvoiceSection from "../InvoiceSection/InvoiceSection";
import TableSection from "../TableSection/TableSection";
import FooterSection from "../FooterSection/FooterSection";
import TableSectionMob from "../TableSectionMob/TableSectionMob";

let Layout = () => {

  const handleSideBar1 = () => {
      $('.SideBarRow').css({
        left: '0rem'
      })
  }

  const handleSideBar2 = () => {
    $('.SideBarRow').css({
      left: '-18rem'
    })
}

  return (
    <Fragment>

      <Container fluid={true}>
      
          <Row className='d-lg-none d-md-none' style={{height: '6vh'}}>

              <Col lg={5} md={5} sm={4} xs={3} className='d-flex justify-content-between align-items-center'>

                <AiOutlineAlignLeft onClick={handleSideBar1} className='sideBarIcon'/>

              </Col>

              <Col lg={7} md={5} sm={4} xs={8} className='m-0 p-0 logoTitleMob d-flex justify-content-center align-items-center'>

                <AiOutlineBarChart className='logoIcon'/> <h1 className='logoTitle'>Invoicer</h1>

              </Col>

              <Col sm={4} className='d-none d-sm-block'></Col>

          </Row>

          <Row style={{height: '100vh', backgroundColor: '#fff'}} >

              <Col lg={2} md={3} className='p-0 d-lg-block d-md-block d-none'>

                <Row className='m-0 mb-3 pt-5 pb-3'>

                    <Col lg={12} md={12} className='logoDiv d-flex justify-content-center align-items-center'>
                    
                      <AiOutlineBarChart className='logoIcon'/> <h1 className='logoTitle'>Invoicer</h1>

                    </Col>

                </Row>
                  
                <Row className='m-0 p-0 d-flex justify-content-center align-items-center' >

                    <Col lg={12} md={12} className='m-0 pl-2 pr-2 sideBarLg'>
                    
                      <ul>

                        <li className='activeLgLi'> <AiOutlineFileText className='liIcons activeLgIcon' /> Invoices</li>
                        <li> <AiOutlinePieChart className='liIcons'/> Reports</li>
                        <li> <AiOutlineBank className='liIcons'/> Banking</li>

                      </ul>

                    </Col>

                </Row>

              </Col>

              <Col lg={10} md={9} sm={12} xs={12} className='p-0 mainSectionCol'>

                  <Row className='m-0 p-0 d-lg-block d-md-block d-none' style={{height: '4rem'}}>

                      <Col lg={12} md={12} sm={12} xs={12} className='h-100 d-flex justify-content-end align-items-center'>

                          <UpperLogin/>

                      </Col>

                  </Row>

                  <Row className='p-0 m-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-2 pt-0'>

                      <Row className='m-0 p-0'>

                          <SecondSection first='This Week' second='-50' third='1' forth='55' />
                          
                          <SecondSection first='Last Week' second='-50' third='2' forth='55' />
                          
                          <SecondSection first='This Month' second='-50' third='1' forth='345' />
                          
                          <SecondSection first='Last Month' second='-50' third='2' forth='280' />

                      </Row>

                    </Col>

                  </Row>

                  <Row className='m-0 p-0 mt-2'>

                      <Col lg={12} md={12} sm={12} xs={12} className='p-0 m-0 p-4 pt-0 pb-0 '>
                      
                        <Dashboard/>

                      </Col>

                  </Row>

                  <Row className='m-0 p-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-0 m-0 p-4 pt-0 pb-0'>
                      
                        <InvoiceSection/>

                    </Col>

                  </Row>

                  <Row className='m-0 p-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-0 m-0 p-4 pt-0 pb-0'>
                      
                        <TableSection/>

                        <TableSectionMob/>

                    </Col>

                  </Row>

                  <Row className='m-0 p-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-0 m-0 p-4 pt-0 pb-0'>
                      
                        <FooterSection/>

                    </Col>

                  </Row>

                  <Row className='m-0 p-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-0 m-0 p-4 pt-0 pb-0'>

                        <div className="extraDib"></div>

                    </Col>

                  </Row>

              </Col>

          </Row>

          <Row className='p-0 m-0 px-3 py-2 d-lg-none d-md-none d-block SideBarRow'>

            <Col lg={12} md={12} sm={12} xs={12} className='p-0 pt-1 pb-1 pl-3 mb-3'>

              <AiOutlineClose onClick={handleSideBar2} className='closeBtn'/>

            </Col>

            <Col lg={12} md={12} sm={12} xs={12} className='loginDivLg d-flex justify-content-center align-items-center'>

              <UpperLogin/>

            </Col>

            <Col lg={12} md={12} sm={12} xs={12} className='p-0 pt-3 mt-2 sideBarMob'>
            
                <ul>

                    <li className='activeMobLi'> <AiOutlineFileText className='liIcons activeMobIcon' /> Invoices</li>
                    <li> <AiOutlinePieChart className='liIcons'/> Reports</li>
                    <li> <AiOutlineBank className='liIcons'/> Banking</li>

                </ul>

            </Col>

          </Row>
      
      </Container>

    </Fragment>
  )
}

export default Layout