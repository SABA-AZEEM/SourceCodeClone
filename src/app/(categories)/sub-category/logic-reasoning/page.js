import React from 'react'
import styles from './logic-reasoning.module.css';
import Image from 'next/image';
import logicReasoning1 from '../../../../../public/sub-category-images/logic-reasoning/logicReasoning1.png';

const page = () => {
  return (
    <div className={styles.mainContainer1}>
    <div className={styles.mainContainer2}>

        {/* structure for section-1  */}
        <section className={styles.sec1}>
            <div className={styles.sub1sec1}>
                <h1 style={{fontSize:'2.8rem'}}>Logic & Reasoning</h1>
                <div className={styles.line}></div>
                <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                Logic & Reasoning
                </p>
            </div>
            <div>
                <Image
                src={logicReasoning1}
                className={styles.sec1Img}
                />
            </div>      
        </section>

        {/* structure for section-2  */}
        <section className={styles.sec2}>
            <p>
            Logic & Reasoning
            </p>
        </section>
    </div>
    </div>
  )
}

export default page
