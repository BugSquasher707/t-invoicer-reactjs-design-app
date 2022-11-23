import React, { Fragment } from 'react'
import './UpperLogin.css'
import { FiUser } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const UpperLogin = () => {
    return (
        <Fragment>
            
            <div className="loginDivLg">

                <div className="iconDiv">

                    <FiUser className='userIcon' />

                </div>

                <div className="loginHeading">

                    <h1 className='userName'>Rodrigo do Carmo</h1>

                    <p className='userPara'>Finances</p>

               </div>

                <div className="dropDownDiv">

                    <BsChevronDown className='downIcon'/>

                </div>

            </div>

        </Fragment>
    )
}

export default UpperLogin
