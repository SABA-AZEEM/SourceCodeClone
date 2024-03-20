"use client"
import React, { useState } from 'react'
import styles from '../expertise.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import pic1 from '../../../../../../public/sub-category-images/expertise-images/mathematics/pic1.png';
import pic2 from '../../../../../../public/sub-category-images/expertise-images/mathematics/pic2.jpg';

import {faq} from '../../../../../../public/data/expertise/faqMathematics.js';


import CourseCard from '@/components/courseCard/CourseCard';

const page = () => {

    const [showAnswer,setShowAnswer]=useState(false)
    const [answerId,setAnswerId]=useState(-1)
    const handleFAQ = (id)=>{
        setShowAnswer(!showAnswer);
        setAnswerId(id);
    }

  return (
   <div className={styles.mainContainer1}>
        <div className={styles.mainContainer2}>

            {/* structure for section-1  */}
            <section className={styles.sec1}>
                <div className={styles.sub1sec1}>
                    <h1 style={{fontSize:'2.8rem'}}>Mathematics</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Discover the world of mathematics through a Muslim perspective. Our courses cover the fundamentals of math, empowering you to apply mathematical principles to solve real-world problems.
                    </p>
                </div>
                <div>
                    <Image
                    src={pic1}
                    className={styles.sec1Img}
                    />
                </div>      
            </section>

            {/* structure for section-2  */}
            <section className={styles.sec2}>
                <p>
                Our mathematics courses offer a <span>comprehensive and essential foundation</span> for a deeper understanding of the world. We believe that every <span>Muslim child should develop advanced skills and knowledge in mathematics,</span> enabling them to explore the principles of algebra, geometry, calculus, and statistics. Through our courses, students will learn to apply mathematical principles to real-world problems and discover the connection between mathematics, science, and the natural world. Join us to develop a deeper understanding of the essential role of mathematics in Allah's creation and gain the skills needed to make an impact in the modern world.
                </p>
            </section>

            {/* structure for section-3  */}
            <section className={styles.sec3}>
                <h2>Offered Courses</h2>
                <div className={styles.line}></div>
                <div className={styles.cardContainer}>
                            <CourseCard
                                key='1'
                                imgURL={pic2}
                                level='Beginner'
                                duration='48 Months'
                                title='Mathematics'
                                linkTitle='Mathematics'
                                linkTitleUrl='/sub-category/mathematics'
                                rupee='8,900.00'
                                detailUrl='/courses-detail/mathematics'
                            />
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
                                <div className={styles.faqContainer} onClick={()=>{
                                    handleFAQ(question.id)
                                }}>
                                    <h3 className={styles.faqQuestion}>{question.question}</h3>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                {
                                    showAnswer && answerId===question.id && <p className={styles.faqAnswer}>{question.answer}</p>
                                }
                                
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
