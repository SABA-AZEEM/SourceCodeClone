'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from './enrollmentCard.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const EnrollmentCard = (props) => {

  const {currentUser} = useSelector(state => state.user);
  const router = useRouter();

  const handleEnroll = ()=>{
    if(currentUser){
      router.push(`/checkout/${props.title}`);
    }else{
      router.push('/login');
    }
  }

  useEffect(()=>{
    console.log(props);
    console.log('current user:',currentUser);

  },[])

  return (
    <div className={styles.enrollment}>
      <h1>{props.title}</h1>
      <h4>{props.limit}</h4>
      <h2>Rs. {props.ruppee}</h2>
      {props.discount ? <span style={{color:'gray',textDecoration:'linehThrough'}}>Rs. {props.discount}</span> : <br></br>}
      <span>{props.timeLimit}</span>
      <button onClick={handleEnroll} className={styles.button}>Enroll Now</button>
      
    </div>
  )
}

export default EnrollmentCard
