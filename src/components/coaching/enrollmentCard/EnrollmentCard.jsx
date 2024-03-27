'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './enrollmentCard.module.css'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const EnrollmentCard = (props) => {

  // const {currentUser} = useSelector(state => state.user);
  const currentUser = JSON.parse(Cookies.get('currentUser'));
  const router = useRouter();
  // console.log(currentUser);
  const [disabledButton,setDisabledButton] = useState(false);
  const {courses} = useSelector(state => state.course)
  
  useEffect(()=>{
    const currentCourse = courses.filter((course)=>{
      if(course.title===props.title){
        return course;
      }
    });
    const currentCourseId = currentCourse[0]._id;
    
    if(currentUser.enrolledCourses){
      currentUser.enrolledCourses.forEach((courseId)=>{
        if(courseId === currentCourseId){
          setDisabledButton(true);
        }
      })
    }
  },[]);

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
      <button 
        onClick={handleEnroll} 
        className={`${styles.button} ${disabledButton ? styles.disable : ''}`}  
        disabled={disabledButton}
      >
      Enroll Now
      </button>
      
    </div>
  )
}

export default EnrollmentCard
