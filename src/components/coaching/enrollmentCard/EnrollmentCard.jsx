import Link from 'next/link'
import React from 'react'
import styles from './enrollmentCard.module.css'

const EnrollmentCard = (props) => {
  return (
    <div className={styles.enrollment}>
      <h4>{props.limit}</h4>
      <h2>Rs. {props.ruppee}</h2>
      {props.discount ? <span style={{color:'gray',textDecoration:'linehThrough'}}>Rs. {props.discount}</span> : <br></br>}
      <span>{props.timeLimit}</span>
      <Link href='/checkout/5-14-0-1-personal-counseling-coaching' className={styles.button}>Enroll Now</Link>
    </div>
  )
}

export default EnrollmentCard
