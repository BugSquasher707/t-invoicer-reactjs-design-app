import React, { Fragment } from 'react'
import './LineGraph.css'
import { Line } from 'react-chartjs-2'

const LineGraph = () => {

    const data = {
        labels: ['Feb 02', 'Feb 09', 'Feb 16', 'Feb 23', 'Mar 01'],
        datasets: [
            {
                label: 'Last 30 days',
                data: [0, 600, 450, 700, 100, 200],
                borderColor: ['rgba(21, 178, 125, 1)'],
                backgroundColor: ['rgba(21, 178, 125, 1)'],
                pointBackgroundColor: ['rgba(21, 178, 125, 1)'],
                pointBorderColor: ['rgba(21, 178, 125, 1)']
            }
        ]
    }

    const options = {
        title: {
            display: true,
            
        },
        scales: {
          yAxes: {
            beginAtZero: true
          }
        }
      };

    return (
        <Fragment>

            <div className="chartMainDiv">

                <Line data={data} options={options}/>
            
            </div>

        </Fragment>
    )
}

export default LineGraph
