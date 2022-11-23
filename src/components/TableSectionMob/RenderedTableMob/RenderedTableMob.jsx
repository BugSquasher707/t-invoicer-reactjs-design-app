import React, { Fragment } from 'react'
import './RenderedTableMob.css'
import { Row, Col } from 'react-bootstrap'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'
import { HiOutlinePencil } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'

const RenderedTableMob = ({item}) => {
    return (
        <Fragment>

            <Row className='m-0 p-0 tableRow3'>

                <Col lg={6} md={6} sm={6} xs={6} className='p-0 d-flex justify-content-start align-items-center'>

                    <input type="checkbox" disabled className='checkBoxInp checkBoxInp1' />

                    <div className="leftSideTableDiv">

                        <div className="firstRow d-flex justify-content-start align-items-center">

                            <p className="idPara">#{item.id}.</p>

                            <p className='businessPara'>{item.business}</p>

                        </div>
                        
                        <p className="amountPara">$ {item.amount}</p>
                        
                        <div className="endRow d-flex justify-content-start flex-wrap align-items-center">

                            <p className="dateTitle">Due Date</p>

                            <p className="datePara">{item.date}</p>

                        </div>

                    </div>

                </Col>

                <Col lg={6} md={6} sm={6} xs={6} className='p-0 flex-column d-flex justify-content-md-center align-items-md-end justify-content-sm-end align-items-sm-end justify-content-center align-items-end marginDiv'>

                    {item.status === 'Pending' && <p className='tableRowStatusPending'>{item.status}</p>}

                    {item.status === 'Past Due' && <p className='tableRowStatusDue'>{item.status}</p>}

                    {item.status === 'Paid' && <p className='tableRowStatusPaid'>{item.status}</p>}
                    
                    <div className="TableIconContainer">

                        {item.status === 'Pending' && <FiThumbsDown className='optionIcons optionIcons1'/>}
                        
                        {item.status === 'Past Due' && <FiThumbsDown className='optionIcons optionIcons1'/>}

                        {item.status === 'Paid' && <FiThumbsUp className='thumbUpIcon'/>}
                        
                        <BiLink className='optionIcons optionIcons1'/>
                        
                        <HiOutlinePencil className='optionIcons optionIcons1'/>
                        
                        <RiDeleteBinLine className='optionIcons optionIcons1'/>

                    </div>

                </Col>

            </Row>
            
        </Fragment>
    )
}

export default RenderedTableMob
