import React from 'react'
import "./SummaryStat.css"
export default function SummaryStat({stat, label, substat}) {
  return (
    <div className='summary-stat'>
        <span className='stat-label'>{label}</span>
    <div className='statistics'>
        <span className='primary-statistic'>{stat}</span>
        <span className='secondary-statistic'>{substat}</span>
    </div>
     
    </div>
  )
}
