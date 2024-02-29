import React from 'react'
import styles from './critical-thinking.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import criticalThinking1 from '../../../../../public/sub-category-images/critical-thinking/critical-thinking1.jpg';
import criticalThinking2 from '../../../../../public/sub-category-images/critical-thinking/critical-thinking2.jpg';

import {faq} from '../../../../../public/data/faqCriticalThinkingCourse'

import CourseCard from '@/components/courseCard/CourseCard';

const page = () => {
  return (
   <div className={styles.mainContainer1}>
        <div className={styles.mainContainer2}>

            {/* structure for section-1  */}
            <section className={styles.sec1}>
                <div className={styles.sub1sec1}>
                    <h1 style={{fontSize:'2.8rem'}}>Critical Thinking</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Why Critical Thinking? Ciritcal Thinking is a core skill to stop the preceding pollution and faults. It identifies the cracks in the system of thinking as well as helps improve and restructure it. Unless we start with critical thinking we will have to spend a lot time refreshing and upgrading our knowledge skills and attribute selection and toning by realizing the fractures of the inherited thought process later on in the process of self and global improvement.
                    </p>
                </div>
                <div>
                    <Image
                    src={criticalThinking1}
                    className={styles.sec1Img}
                    />
                </div>      
            </section>

            {/* structure for section-2  */}
            <section className={styles.sec2}>
                <p>
                The effects of <span>global and local culture</span> on the way of thinking, the very thought and its inputs have to be determined through a <span>very academic and structured approach.</span> The understanding of how the mind works, the brain and its intricate effects on our <span>psychology and behavior</span> towards thinking as well as the evolution of thought irrelevant of <span>any science or culture</span> needs to be assessed. A very professional approach requires <span>extreme sensitivity and a very wide aperture</span> to factor in the right angel of view and <span>improvement procedure.</span>
                </p>
                <p>
                Every course is designed while keeping in view both the <span>challenge of the preceding thought and thought process</span> as well as the successful and safe handing over to the <span>following generations.</span>
                </p>
            </section>

            {/* structure for section-3  */}
            <section className={styles.sec3}>
                <h2>Offered Courses</h2>
                <div className={styles.line}></div>
                <CourseCard
                    key='1'
                    imgURL={criticalThinking2}
                    duration='12 Months'
                    title='Critical thinking-Learning how to think'
                    linkTitle='Critical Thinking'
                    linkTitleUrl='/sub-category/critical-thinking'
                    rupee='8,900.00'
                    detailUrl='/courses-detail/critical-thinking-learning-how-to-think'
                />
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
