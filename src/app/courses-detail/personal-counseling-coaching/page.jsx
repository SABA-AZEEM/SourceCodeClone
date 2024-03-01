import React from 'react'
import styles from '../coursesDetail.module.css';

import TopPart from '@/components/coaching/top-part/TopPart';

import mainImg from '../../../../public/coaching-images/personal-counseling-coaching/pic1.png';

import Description from '@/components/coaching/description/Description';
import Requirements from '@/components/coaching/requirements/Requirements';

import { requirements } from '../../../../public/data/requirementsData';
import { enrollmentData } from '../../../../public/data/enrollmentData';
import EnrollmentCard from '@/components/coaching/enrollmentCard/EnrollmentCard';

const page = () => {

  let mainHeading = 'Personal Counseling & Coaching';

  let mainDescription='Schedule a one-on-one coaching session with Sahil Adeem to work on your personal vision, improve your skills, develop a parenting strategy, learn to handle various situations, and enhance your perspective on life.'

  let description=`Sahil Adeem is an experienced coach and a psychologist with a passion for helping people improve their personal vision, develop new skills, improve their parenting skills, handle difficult situations more effectively, and gain a new perspective on their life and its challenges. With his guidance, you can make meaningful progress towards your goals and achieve the results you desire.

  To book a personal one-on-one coaching session with Sahil, simply select a date and time slot that works for you, fill out the form, and we will get back to you to confirm your appointment. We look forward to helping you reach your full potential and achieve your dreams with the help of Sahil's expert coaching.`

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subMain}>

        <TopPart
          mainImg={mainImg}
          heading={mainHeading}
          category={'Coaching'}
          duration={'Hourly Session'}
          description={mainDescription}
        />

        <Description
          description={description}
        />

        <div className={styles.requirementContainer}>
          <h3>Requirements</h3>
          <div className={styles.line}></div>
          <div className={styles.requirements}>
            {
              requirements.map((requirement)=>(
                <Requirements
                  logo={requirement.logo}
                  title={requirement.title}
                  description={requirement.description}
                />
              ))
            }
          </div>
        </div>

        <div className={styles.enrollmentPlansContainer}>
            <h2 style={{fontSize:'2.2rem',marginBottom:'1rem'}}>Enrollment Plans</h2>
            <h5 style={{fontSize:'1.2rem',marginBottom:'0.5rem'}}>Individual Plan</h5>
            <div className={styles.border}></div>
            <div className={styles.enrollments}>
              {
                enrollmentData.map((enrollment)=>(
                  <EnrollmentCard
                    key={enrollment.id}
                    limit={enrollment.limit}
                    ruppee={enrollment.ruppee}
                    timeLimit={enrollment.timeLimit}
                  />
                ))
              }
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
