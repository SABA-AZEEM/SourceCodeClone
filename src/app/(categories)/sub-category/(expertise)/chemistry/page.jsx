"use client"
import React, { useState } from 'react'
import styles from '../expertise.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import pic1 from '../../../../../../public/sub-category-images/expertise-images/chemistry/pic1.jpg';
import pic2 from '../../../../../../public/sub-category-images/expertise-images/chemistry/pic2.jpg';

import {faq} from '../../../../../../public/data/expertise/faqChemistry';


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
                    <h1 style={{fontSize:'2.8rem'}}>Chemistry</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Explore the mysteries of the elements with our chemistry courses for Muslims. From atomic structure to chemical reactions, gain a deeper understanding of the world around us.
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
                Our chemistry courses for Muslims offer a comprehensive introduction to the world of elements and compounds. Through our courses, you'll gain a strong understanding of the fundamentals of chemistry, including atomic structure, chemical bonding, and reaction kinetics. You'll also explore the properties and behaviors of the elements, and the principles behind their applications in everyday life. Our courses are designed to provide a solid foundation in the basic concepts of chemistry, empowering you to conduct further research and explore new topics.
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
                                title='Chemistry'
                                linkTitle='Chemistry'
                                linkTitleUrl='/sub-category/chemistry'
                                rupee='8,900.00'
                                detailUrl='/courses-detail/chemistry'
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
