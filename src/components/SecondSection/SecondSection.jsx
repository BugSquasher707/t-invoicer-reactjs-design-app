import React, { Fragment } from 'react'
import './SecondSection.css'
import { Col } from 'react-bootstrap'

const SecondSection = ({first, second, third, forth}) => {
    return (
        <Fragment>

            <Col lg={3} md={4} sm={6} xs={6} className='p-0 mt-4 d-flex justify-content-center align-items-center boxCol'>
                
                <div className="boxContainer">

                    <div className="boxTopDiv">
                        
                        <h1 className='boxTopHeading'>{first}</h1>

                        <p className='boxTopPara'>{second}%</p>

                    </div>

                    <div className="boxMiddleDiv">

                        <h1>{third}</h1>

                        <span>.</span>

                        <h1>${forth}</h1>

                    </div>

                </div>

            </Col>
            
        </Fragment>
    )
}

export default SecondSection
