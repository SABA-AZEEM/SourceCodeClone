"use client"
import React, { useState } from 'react'
import styles from '../expertise.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import pic1 from '../../../../../../public/sub-category-images/expertise-images/biology/pic1.png';
import pic2 from '../../../../../../public/sub-category-images/expertise-images/biology/pic2.jpg';

import {faq} from '../../../../../../public/data/expertise/faqBiology';


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
                    <h1 style={{fontSize:'2.8rem'}}>Biology</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Uncover the wonders of biology from a Muslim perspective. Our courses delve into the study of living organisms and their interactions with the environment, providing a deeper understanding of Allah's creation and its connection to modern science and learning.
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
                Discover the fascinating world of biology with our courses designed for the Muslim Ummah. Our courses offer a comprehensive introduction to the study of living organisms, including genetics, ecosystems, ecology, and the principles behind human health and disease.
                </p>

                <p>
                Through our courses, you'll gain a deep understanding of biology and its relevance to the modern world, while also appreciating the wisdom and guidance of Allah in His creation. Our instructors weave Islamic teachings into the course content, highlighting the connection between the natural world and Islamic principles. Join us today to unlock the secrets of the living world and gain new insights into Allah's creation.
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
                                title='Biology'
                                linkTitle='Biology'
                                linkTitleUrl='/sub-category/biology'
                                rupee='8,900.00'
                                detailUrl='/courses-detail/biology'
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
