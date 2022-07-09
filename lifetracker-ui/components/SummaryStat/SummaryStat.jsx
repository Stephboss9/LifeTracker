import React from 'react'
import "./SummaryStat.css"
import moment from "moment"
export default function SummaryStat({stat, label, substat, isDate}) {
  return (
        <div className='summary-stat'>
            <div className='primary-stat'>
                <span className='stat-label'>{label}</span>
                <span className='primary-statistic'>{stat}</span>
            </div>

        <div className='substat'>
            {isDate?<span className='date-title'>Date </span>: <span className='date-title'>Category </span>}
            <span className='secondary-statistic'>{isDate?moment(substat).format('MM/DD/YYYY'):substat}</span>
        </div>
     
    </div>
  )
}
