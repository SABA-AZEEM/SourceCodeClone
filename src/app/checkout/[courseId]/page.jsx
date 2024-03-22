'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './checkout.module.css';

const page = ({params}) => {

  const title = decodeURIComponent(params.courseId);
  const {courses} = useSelector(state => state.course);
  const course = courses.filter((course)=> course.title === title);
  console.log(course);

  const {currentUser} = useSelector(state => state.user)
  console.log(currentUser);

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
                <span>Full Name:</span>
                {/* <p>{currentUser.firstName}</p> */}
              </div>
            </div>
            <div></div>
          </div>

        </section>

      </div>

    </div>
  )
}

export default page;
