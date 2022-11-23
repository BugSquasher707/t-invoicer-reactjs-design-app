import React, { Fragment } from 'react'
import './FooterSection.css'
import { Row, Col, Form } from 'react-bootstrap'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const FooterSection = () => {
    return (
        <Fragment>

            <Row className='p-0 m-0 mt-3'>

                <Col lg={3} md={4} sm={6} xs={12} className='p-0'>

                    <div className="leftDivFooter">
                        
                        <Form.Select className='selectInp'>
                        
                            <option disabled>none</option>
                            <option defaultValue>20</option>
                        
                        </Form.Select>

                        <p>result per page</p>

                    </div>

                </Col>

                <Col lg={6} md={6} sm={6} xs={12} className='p-0 d-flex justify-content-center align-items-center'>

                    <div className="sliderBtn"><IoIosArrowBack className='leftArrow'/></div>
                    <div className="sliderBtn sliderBtn1">1</div>
                    <div className="sliderBtn">2</div>
                    <div className="sliderBtn">...</div>
                    <div className="sliderBtn">11</div>
                    <div className="sliderBtn"><IoIosArrowForward className='rightArrow'/></div>

                </Col>

                <Col lg={3} md={2} className='p-0 d-lg-block d-md-block d-none'>
                
                </Col>

            </Row>
            
        </Fragment>
    )
}

export default FooterSection
