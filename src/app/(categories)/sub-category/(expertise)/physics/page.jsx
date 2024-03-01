"use client"
import React, { useState } from 'react'
import styles from '../expertise.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import pic1 from '../../../../../../public/sub-category-images/expertise-images/physics/pic1.jpg';
import pic2 from '../../../../../../public/sub-category-images/expertise-images/physics/pic2.jpg';

import {faq} from '../../../../../../public/data/expertise/faqPhysics';


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
                    <h1 style={{fontSize:'2.8rem'}}>Physics</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Physics is one of the major tools in the advancement of science and technology. Children need a strong foundation in physics to be well-rounded and prepared for the modern world, where technology has become pervasive in our daily lives. It also helps them develop problem-solving and critical thinking skills, which will help them take on the challenges of adolescence, adulthood, and professional life.
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
                Physics plays a crucial role in the advancement of science and technology. Providing children with a solid foundation in physics is crucial for their overall education and preparation for the modern world, where technology is deeply integrated into daily life.

                In addition to providing a strong foundation in science and technology, a background in physics also helps children develop critical thinking and problem-solving skills. These skills are essential for success in both personal and professional life, as they allow individuals to approach challenges and obstacles with a creative and analytical mindset.

                By studying physics, children learn about the laws of nature, matter, energy, and motion, and gain an understanding of how these principles shape and impact the world around them. This understanding helps them become well-rounded individuals, better equipped to navigate the challenges of adolescence, adulthood, and professional life.
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
                                title='Physics'
                                linkTitle='Physics'
                                linkTitleUrl='/sub-category/physics'
                                rupee='8,900.00'
                                detailUrl='/courses-detail/physics'
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
