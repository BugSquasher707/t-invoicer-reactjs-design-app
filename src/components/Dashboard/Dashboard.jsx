import React, { Fragment } from 'react'
import './Dashboard.css'
import { BsCalendar2 } from "react-icons/bs";
import { FiChevronDown } from 'react-icons/fi'
import LineGraph from '../LineGraph/LineGraph';

const Dashboard = () => {
    return (
        <Fragment>
            
            <div className="mainDashboard">
                
                <div className="dashboardTitle">
                    
                    <h1>Dashboard</h1>

                    <div className="loginDivLg calendarContainer">

                        <BsCalendar2 className='calendarIcon' />

                        <div className="loginHeading">

                            <p className='calendarPara'>Period</p>

                            <h2 className='calendarName'>Last 30 days</h2>

                        </div>

                        <div className="dropDownDiv">

                            <FiChevronDown className='downIcon2'/>

                        </div>

                    </div>

                </div>
                
                <div className="dashboardTotalTile">
                    
                    <h1>Total</h1>

                </div>

                <div className="dashboardPriceTile">
                    
                    <h1>R$ 1.436,35</h1>

                </div>

                <div className="dashboardProfitTile">
                    
                    <p><span>+ 10%</span> last period</p>

                </div>

                <div className="dashboardGraph">

                    <LineGraph/>

                </div>

            </div>

        </Fragment>
    )
}

export default Dashboard
