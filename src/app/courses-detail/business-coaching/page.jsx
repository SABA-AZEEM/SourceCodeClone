import React from 'react'
import styles from '../coursesDetail.module.css';

import TopPart from '@/components/coaching/top-part/TopPart';

import mainImg from '../../../../public/coaching-images/business-coaching/pic1.jpg';

import Description from '@/components/coaching/description/Description';
import Requirements from '@/components/coaching/requirements/Requirements';

import { requirements } from '../../../../public/data/requirementsData';
import { enrollmentData } from '../../../../public/data/businessEnrollmentData';
import EnrollmentCard from '@/components/coaching/enrollmentCard/EnrollmentCard';

const page = () => {

  let mainHeading = 'Business Coaching';

  let mainDescription='Set aside time to receive business development, strategy development, advisory services, business consultation, and marketing plan consultation from Sahil Adeem for your business'

  let description=`Are you ready to take your business to the next level? Look no further.

  Sahil Adeem is a highly experienced business coach who can help you with business development, strategy development, advisory services, business consultation, and marketing plan consultation. Don't let the challenges of running a business hold you back. With Sahil's guidance and expertise, you can overcome any obstacle and achieve your goals.
  
  Book a coaching session with Sahil today and take the first step towards growing and scaling your business. Together, we can map out a plan for success and ensure that you have the tools and support you need to thrive.
  
  To book a business coaching session with Sahil, simply select a date and time slot that works for you, fill out the form, and we will get back to you to confirm your appointment.
  
  We look forward to helping you reach your full potential and achieve your dreams with the help of Sahil's expert coaching.`

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
                // enrollmentData.map((enrollment)=>(
                //   <EnrollmentCard
                //     key={enrollment.id}
                //     id={enrollment.id}
                //     limit={enrollment.limit}
                //     ruppee={enrollment.ruppee}
                //     timeLimit={enrollment.timeLimit}
                //     title={mainHeading}
                    
                //   />
                // ))
                <EnrollmentCard 
                  limit='1 Hour Session'
                  ruppee='116,000.00'
                  timeLimit='Per Hour'
                  title={`${mainHeading}`}
                />
              }
            </div>
        </div>

      </div>
    </div>
  )
}

export default page
