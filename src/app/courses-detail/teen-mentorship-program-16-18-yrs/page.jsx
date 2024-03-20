import React from 'react'
import styles from '../coursesDetail.module.css';

import TopPart from '@/components/coaching/top-part/TopPart';

import mainImg from '../../../../public/coaching-images/teen-mentorship-program/pic1.png';

import Description from '@/components/coaching/description/Description';
import Requirements from '@/components/coaching/requirements/Requirements';

import { requirements } from '../../../../public/data/requirementsData';
import { teenMentorshipData } from '../../../../public/data/teenMentorshipData';
import EnrollmentCard from '@/components/coaching/enrollmentCard/EnrollmentCard';

const page = () => {

  let mainHeading = 'Teen Mentorship Program (16-18 Yrs)';

  let mainDescription='The Teen Mentorship Program is a one-year training course for 16 to 18-year-olds, covering life direction, emotional challenges, Islamic psychology, and more. With 4 hours per month of training and experienced mentors, this program offers a unique opportunity for personal growth and development.'

  let description=`The Teen Mentorship Program is a comprehensive one-year training course designed for teenagers aged 16 to 18 Years. The program is designed to help teenagers navigate the emotional and mental challenges of adolescence and develop a strong sense of direction in life. The program is structured as a 4-hour-per-month, one-hour-per-week training program, consisting of 52 sessions.

  The curriculum covers a wide range of topics, including Islamic psychology basics, dealing with teenage problems through a sensible and rational mindset, raising IQ and emotional quotient, and knowledge and skill development. The program also provides guidance on major problems and their perspective through Islam.
  
  The program is conducted by Sahil Adeem and is based on a task-based training approach, with tasks and projects to complete based on the skills being addressed. 
  
  This program offers a unique opportunity for teenagers to develop the skills, knowledge, and confidence they need to succeed in life and become responsible, well-rounded individuals. Don't miss this chance to invest in your future and sign up today!`

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subMain}>

        <TopPart
          mainImg={mainImg}
          heading={mainHeading}
          category={'Coaching'}
          duration={'12 Months'}
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
                teenMentorshipData.map((enrollment)=>(
                  <EnrollmentCard
                    key={enrollment.id}
                    limit={enrollment.limit}
                    ruppee={enrollment.ruppee}
                    discount={enrollment.discount}
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
