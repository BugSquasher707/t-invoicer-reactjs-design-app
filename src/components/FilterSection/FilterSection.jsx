import React, { Fragment } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import './FilterSection.css'
import { BsCalendar } from 'react-icons/bs'

const FilterSection = () => {
    return (
        <Fragment>
            
            <div className="wrapperDiv"></div>

            <div className='filterMainDiv'>

                <Row className='m-0 p-0'>

                    <Col lg={3} md={6} sm={6} xs={12} className=''>

                        <div className="dateGenDiv">

                            <p>Date Generated</p>

                            <input type="text" className='dateInp' placeholder='Date' value='01/02/2021 - 02/02/2021'/>

                            <BsCalendar className='calenderIcon1'/>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Amount Total</p>

                            <input type="text" className='dateInp' value='$ 10,000 - $ 13,000' placeholder='Amount'/>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>ITD Status</p>

                            <Form.Select className='selectInp selectInp1'>
                        
                                <option defaultValue>Select One</option>
                        
                            </Form.Select>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Distributor</p>

                            <Form.Select className='selectInp selectInp1'>
                        
                                <option defaultValue>Select One</option>
                        
                            </Form.Select>

                        </div>

                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12} className=''>
                    
                        <div className="dateGenDiv">

                                <p>Date Paid</p>

                                <input type="text" className='dateInp' placeholder='Date' value='01/02/2021 - 02/02/2021'/>

                                <BsCalendar className='calenderIcon1'/>

                            </div>

                            <div className="mt-3 dateGenDiv">

                                <p>City</p>

                                <Form.Select className='selectInp selectInp1'>
                            
                                    <option defaultValue>Select One</option>
                            
                                </Form.Select>

                            </div>

                            <div className="mt-3 dateGenDiv">

                                <p>Sent/Unsent</p>

                                <Form.Select className='selectInp selectInp1'>
                            
                                    <option defaultValue>Select One</option>
                            
                                </Form.Select>

                            </div>

                            <div className="mt-3 dateGenDiv">

                                <p>Payable Notice</p>

                                <Form.Select className='selectInp selectInp1'>
                            
                                    <option defaultValue>Select One</option>
                            
                                </Form.Select>

                            </div>

                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12} className=''>
                    
                        <div className="dateGenDiv">

                            <p>Unpaid As Of</p>

                            <input type="text" className='dateInp' placeholder='Unpaid As Of'/>

                            <BsCalendar className='calenderIcon1'/>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>State</p>

                            <Form.Select className='selectInp selectInp1'>

                                <option defaultValue>Select One</option>

                            </Form.Select>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Business Default Billing Method</p>

                            <Form.Select className='selectInp selectInp1'>

                                <option defaultValue>Select One</option>

                            </Form.Select>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Invoice ID</p>

                            <input type="text" className='dateInp' placeholder='Invoice ID'/>

                        </div>

                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12} className=''>
                    
                        <div className="dateGenDiv">

                            <p>Sent As Of</p>

                            <input type="text" className='dateInp' placeholder='Sent As Of'/>

                            <BsCalendar className='calenderIcon1'/>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Country</p>

                            <Form.Select className='selectInp selectInp1'>

                                <option defaultValue>Select One</option>

                            </Form.Select>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Payment Method</p>

                            <Form.Select className='selectInp selectInp1'>

                                <option defaultValue>Select One</option>

                            </Form.Select>

                        </div>

                        <div className="mt-3 dateGenDiv">

                            <p>Business ID</p>

                            <input type="text" className='dateInp' placeholder='Business ID'/>

                        </div>

                    </Col>

                </Row>

                <Row className='p-0 m-0 mt-4'>

                    <Col className='p-0 d-flex justify-content-end align-items-center'>

                        <div className="invoiceBtn invoiceBtn2">

                            <p>Apply Filters</p>

                        </div>

                    </Col>

                </Row>

            </div>

        </Fragment>
    )
}

export default FilterSection
