import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
        <img src={`./image/${props.img}`} alt="" className='card-img' />
        <div className="card-stats">
            <span className="gray">{props.rating}</span>
            <span className="gray">{props.stats}</span> 
        </div>
        <p className="card-title">{props.name}</p>
    </div>
  )
}
