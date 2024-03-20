import React from 'react'
import styles from './research-analysis.module.css';
import Image from 'next/image';
import researchAnalysis1 from '../../../../../public/sub-category-images/research-analysis/research-analysis1.jpg';

const page = () => {
  return (
    <div className={styles.mainContainer1}>
    <div className={styles.mainContainer2}>

        {/* structure for section-1  */}
        <section className={styles.sec1}>
            <div className={styles.sub1sec1}>
                <h1 style={{fontSize:'2.8rem'}}>Research & Analysis</h1>
                <div className={styles.line}></div>
                <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                This is a key skill in enhancing and polishing both the thought and the eloquence of expression. The value of the knowledge is enhanced only through this skill.
                </p>
            </div>
            <div>
                <Image
                src={researchAnalysis1}
                className={styles.sec1Img}
                />
            </div>      
        </section>

        {/* structure for section-2  */}
        <section className={styles.sec2}>
            <p>
            This course is view of the <span>current problems that will effect the next 100 years drastically</span> based on the advent of technology, <span>the cognitive ease and the lethargy</span> that is naturally going to quadruple in the next generations.
            </p>
            <p>
            This skill is enhanced by training the students <span>into developing an insight</span> on how to research, what to research and most of all why <span>researching and analysis is the only real difference</span> between the maturity of thought and merely its <span>attractive expression at best.</span>
            </p>
        </section>
    </div>
    </div>
  )
}

export default page
