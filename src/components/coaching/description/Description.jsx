import React from 'react'

const Description = (props) => {
  return (
    <div style={{marginTop:'4.3rem'}}>
      <h3 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Description</h3>
      <p style={{fontSize:'1.2rem',lineHeight:'1.5'}}>{props.description}</p>
    </div>
  )
}

export default Description
