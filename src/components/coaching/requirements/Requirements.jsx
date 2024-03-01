import React from 'react'
import styles from './requirement.module.css'
import Image from 'next/image'

const Requirements = (props) => {
  return (
    <div className={styles.requirementContainer}>
        <Image src={props.logo} className={styles.logo}/>
        <h4 className={styles.heading}>{props.title}</h4>
        <p style={{color:'gray',fontSize:'.8rem'}}>{props.description}</p>
    </div>
  )
}

export default Requirements
