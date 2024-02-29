import React from 'react'
import styles from './world-view.module.css';
import Image from 'next/image';
import worldView1 from '../../../../../public/sub-category-images/world-view/world-view1.jpg';

const page = () => {
  return (
    <div className={styles.mainContainer1}>
    <div className={styles.mainContainer2}>

        {/* structure for section-1  */}
        <section className={styles.sec1}>
            <div className={styles.sub1sec1}>
                <h1 style={{fontSize:'2.8rem'}}>World View</h1>
                <div className={styles.line}></div>
                <p style={{fontSize:'1.4rem',lineHeight:'1.3'}}>
                The right worldview is essential to achieving a vision. We must create it and pass it on to future generations with caution to bridge gaps in expertise and understanding.
                </p>
            </div>
            <div>
                <Image
                src={worldView1}
                className={styles.sec1Img}
                />
            </div>      
        </section>

        {/* structure for section-2  */}
        <section className={styles.sec2}>
            <p>
            The biggest dissonance between the <span>vision and its achievement</span> comes through the lack of the <span>right world view</span> and it similar understanding in others. It’s a duty not a luxury to create the right worldview and hand it over to the children with <span>extreme sensitivity and caution.</span> Otherwise the disconnect and the dissonance will only increase between not just the generations, but the expertise and its demand to solve <span>the bigger problems.</span>
            </p>
        </section>
    </div>
    </div>
  )
}

export default page
