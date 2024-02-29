import React from 'react'
import styles from './arabic-language.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import arabicLanguage1 from '../../../../../public/sub-category-images/arabic-language/arabicLanguage1.jpg';

import { arabicCourses } from '../../../../../public/data/arabicCourseData';
import {faq} from '../../../../../public/data/faqArabicCourse'


import CourseCard from '@/components/courseCard/CourseCard';

const page = () => {
  return (
   <div className={styles.mainContainer1}>
        <div className={styles.mainContainer2}>

            {/* structure for section-1  */}
            <section className={styles.sec1}>
                <div className={styles.sub1sec1}>
                    <h1 style={{fontSize:'2.8rem'}}>Arabic Language</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Starting with the very basic of understanding the depth of Arabic, we have taken it into steps to ensure that the students’ confidence is developed quickly and the ensure he spends time in going through the intricacies of the Arabic language later on
                    </p>
                </div>
                <div>
                    <Image
                    src={arabicLanguage1}
                    className={styles.sec1Img}
                    />
                </div>      
            </section>

            {/* structure for section-2  */}
            <section className={styles.sec2}>
                <p>
                The core need of the muslims is to thoroughly understand the language of the divine literature and to interpret it as it needs to be done. The lack of confidence in the current muslim in understanding the divine literature the Quran, hadith and the literatur of the classical and modern philosophers of divinity is due to the lack of eloquence in the Arabic language.
                </p>
                <p>
                Starting with the very basic of understanding the depth of Arabic, we have taken it into steps to ensure that the students’ confidence is developed quickly and the ensure he spends time in going through the intricacies of the Arabic language later on. Unless he does that, he will never be able to reduce the delta between the required knowledge and its utility and the current state of his skill in this field.
                </p>
            </section>

            {/* structure for section-3  */}
            <section className={styles.sec3}>
                <h2>Offered Courses</h2>
                <div className={styles.line}></div>
                <div className={styles.cardContainer}>
                    {
                        arabicCourses.map((course)=>(
                            <CourseCard
                                key={course.id}
                                imgURL={course.imgURL}
                                level={course.level}
                                duration={course.duration}
                                title={course.title}
                                linkTitle={course.linkTitle}
                                linkTitleUrl={course.linkTitleUrl}
                                rupee={course.rupee}
                                detailUrl={course.detailUrl}
                            />
                        ))
                    }
                </div>
            </section>

            {/* structure for section-4  */}
            <section className={styles.sec4}>
                <div className={styles.sub1sec4}>
                    <h2 style={{fontSize:'2.3rem'}}>Frequently Asked Questions</h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.faq}>

                    {
                        faq.map((question)=>(
                            <div className={styles.faqItem}>
                                <div className={styles.faqContainer}>
                                    <h3 className={styles.faqQuestion}>{question.question}</h3>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <p className={styles.faqAnswer}>{question.answer}</p>
                            </div>
                        ))
                    }

                </div>
            </section>

        </div>
    </div>
  )
}

export default page
