import React, { Fragment } from 'react'
import './RenderedData.css'
import { Row, Col } from 'react-bootstrap'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'

const RenderedData = ({item}) => {
    return (
        <Fragment>

            <Row className='m-0 p-0 tableRow1 tableRow2'>

                <Col xl={1} lg={1} md={1} sm={2} xs={2} className='p-0 d-flex justify-content-start align-items-center'>

                    <input type="checkbox" className='checkBoxInp' />
                    
                    <p className='tableDataPara'>{item.id}</p>
                
                </Col>

                <Col lg={3} md={3} sm={3} xs={3} className='p-0 d-flex justify-content-start align-items-center'>

                    <p className='tableDataPara' style={{padding: '0px 1rem'}}>{item.business}</p>

                </Col>

                <Col lg={2} md={2} sm={2} xs={2} className='p-0 d-flex justify-content-start align-items-center'>

                    <p className='tableDataPara'>{item.date}</p>

                </Col>

                <Col lg={1} md={1} sm={1} xs={1} className='p-0 d-flex justify-content-start align-items-center'>

                    {item.status === 'Pending' && <p className='tableDataPara'>$ {item.amount}</p>}
                    
                    {item.status === 'Past Due' && <p className='tableDataPara'>$ {item.amount}</p>}
                    
                    {item.status === 'Paid' && <p className='tableDataPara tableDataParaPaid'>$ {item.amount}</p>}

                </Col>

                <Col lg={2} md={2} sm={1} xs={1} className='p-0 d-flex justify-content-center align-items-center'>

                    {item.status === 'Pending' && <p className='tableRowStatusPending'>{item.status}</p>}
                    
                    {item.status === 'Past Due' && <p className='tableRowStatusDue'>{item.status}</p>}
                    
                    {item.status === 'Paid' && <p className='tableRowStatusPaid'>{item.status}</p>}

                </Col>

                <Col lg={3} md={3} sm={3} xs={3} className='p-0 d-flex justify-content-start align-items-center'>

                    {item.status === 'Pending' && <FiThumbsDown className='optionIcons'/>}
                    
                    {item.status === 'Past Due' && <FiThumbsDown className='optionIcons'/>}

                    {item.status === 'Paid' && <FiThumbsUp className='thumbUpIcon'/>}
                    
                    <BiLink className='optionIcons'/>
                    
                    <HiOutlinePencil className='optionIcons'/>
                    
                    <RiDeleteBinLine className='optionIcons'/>

                </Col>

            </Row>
            
        </Fragment>
    )
}

export default RenderedData
