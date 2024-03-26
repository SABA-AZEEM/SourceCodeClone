'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './checkout.module.css';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Stripe from '@/components/stripeComponent/Stripe';

const page = ({params}) => {

  const title = decodeURIComponent(params.courseId);
  const {courses} = useSelector(state => state.course);
  const course = courses.filter((course)=> course.title === title);
  console.log('course',course[0]._id);
  

  const currentUser = Cookies.get('currentUser');
  const user = JSON.parse(currentUser);
  console.log('user',user._id);

  

  return (
    <div className={styles.mainContainer}>

      <div className={styles.subContainer}>

        <h1 style={{marginTop:'2.5rem',fontSize:'2.5rem',fontWeight:'600',textAlign:'center'}}>ENROLMENT</h1>

        <section className={styles.header}>
          <Image
            src={course[0].imgURL}
            alt="course-image"
            width={100} // Optional width for layout
            height={70} // Optional height for layout
          />
          <div style={{margin:'auto 0'}}>
            <h4 style={{marginBottom:'8px'}}>{course[0].title}</h4>
            <h3>PKR. {course[0].rupee}</h3>
          </div>
        </section>

        <section>
          <div>
            <div>Student Detail</div>
            <div>Payment</div>
          </div>

          <div>
            <div>
              <h3>Your Information</h3>
              <div>
                <span>First Name:</span>
                <p>{user.firstName}</p>
              </div>
              <div>
                <span>Last Name:</span>
                <p>{user.lastName}</p>
              </div>
              <div>
                <span>Email:</span>
                <p>{user.emailAddress}</p>
              </div>
            </div>
          </div>  

        </section>

        <section>
            <Stripe 
              course_id={course[0]._id}
              user_id={user._id}
            />
        </section>

      </div>

    </div>
  )
}

export default page;
