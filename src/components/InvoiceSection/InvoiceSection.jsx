import React, { Fragment, useState } from 'react'
import './InvoiceSection.css'
import { VscSettings } from 'react-icons/vsc'
import { FiSearch, FiPrinter, FiDownload } from 'react-icons/fi'
import FilterSection from '../FilterSection/FilterSection'

const InvoiceSection = () => {

    const [isShow, setIsShow] = useState(false)

    const handleShow = () => {
        setIsShow(!isShow)
    }

    return (
        <Fragment>
            
            <div className="invoicesMainDiv">

                <h1 className='invoicesTitle'>Invoices</h1>

                <div className="d-none invoiceBtn">

                    <p>Create Invoice</p>

                </div>

                <div className="invoicesOptionsDiv">

                    <div className="inpContainer">
                        
                        <input type="text" placeholder='Search' className='searchInpBox' />

                        <FiSearch className='searchIcon'/>

                    </div>

                    <div className="filterBtn" onClick={handleShow}>

                        <VscSettings className='settingIcon'/>

                        <p>Filter</p>

                    </div>

                    <div className="filterBtn">

                        <FiPrinter className='settingIcon'/>

                        <p>Print</p>

                    </div>

                    <div className="filterBtn">

                        <FiDownload className='settingIcon'/>

                        <p>Download</p>

                    </div>

                    <div className="invoiceBtn invoiceBtn2">

                        <p>Create Invoice</p>

                    </div>

                </div>

                {isShow && <FilterSection/>}

            </div>

        </Fragment>
    )
}

export default InvoiceSection
