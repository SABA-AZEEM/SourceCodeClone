'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from './enrollmentCard.module.css'
import { useSelector } from 'react-redux'

const EnrollmentCard = (props) => {

  const {courses} = useSelector(state => state.course);
  useEffect(()=>{
    console.log(props);

  },[])

  return (
    <div className={styles.enrollment}>
      <h1>{props.title}</h1>
      <h4>{props.limit}</h4>
      <h2>Rs. {props.ruppee}</h2>
      {props.discount ? <span style={{color:'gray',textDecoration:'linehThrough'}}>Rs. {props.discount}</span> : <br></br>}
      <span>{props.timeLimit}</span>
      <Link href='/checkout/5-14-0-1-personal-counseling-coaching' className={styles.button}>Enroll Now</Link>
    </div>
  )
}

export default EnrollmentCard
