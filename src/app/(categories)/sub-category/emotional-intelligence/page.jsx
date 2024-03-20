import React from 'react'
import styles from './emotional-intelligence.module.css';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import pic1 from '../../../../../public/sub-category-images/emotional-intelligence/pic1.jpg';
import pic2 from '../../../../../public/sub-category-images/emotional-intelligence/pic2.jpg';

import {faq} from '../../../../../public/data/faqEmotionalIntelligenceCourse'


import CourseCard from '@/components/courseCard/CourseCard';

const page = () => {
  return (
   <div className={styles.mainContainer1}>
        <div className={styles.mainContainer2}>

            {/* structure for section-1  */}
            <section className={styles.sec1}>
                <div className={styles.sub1sec1}>
                    <h1 style={{fontSize:'2.8rem'}}>Emotional Intelligence</h1>
                    <div className={styles.line}></div>
                    <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                    Even an epidermal understanding of the current and future problem shows an immediate need of emotional intelligence to ensure how to remain emotionally correct while we develop ourselves and others. This is a key skill to understand the intricacies of the human behavior, the cause and effect of Emotional deterioration and the need to instill and enhance this skill.
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
                The bigger problems that we <span>foresee in the next 100 years</span> are mere outputs of the <span>lack of emotional intelligence</span> of the current and preceding generations. Even <span>at the expert levels</span> of many fields we see the <span>lack of this skill to attract</span> and instill those skills and knowledge because of the lack of EI in those faculties.
                </p>
                <p>
                The case study of the current Muslim <span>ummah is enormously significant.</span> The lack of emotional intelligence in the general <span>Muslim population</span> has sucked out the <span>attraction of Islam as a philosophy</span> and system to be adopted <span>by any other faith or system.</span>
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
                                duration='12 Months'
                                title='Emotional Intelligence'
                                linkTitle='Emotional Intelligence'
                                linkTitleUrl='/sub-category/emotional-intelligence'
                                rupee='8,900.00'
                                detailUrl='/courses-detail/emotional-intelligence'
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
