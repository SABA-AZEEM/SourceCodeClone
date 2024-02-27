import Image from "next/image";
import styles from "./page.module.css";
import myImage from '../../public/main-hero-image.jpg';
import Link from "next/link";
import Skills from "@/components/skills/Skills";

import eloquence from '../../public/skillsImages/eloquence.png';
import expertise from '../../public/skillsImages/expertise.png';
import thought from '../../public/skillsImages/thought.png';

export default function Home() {

  const skillsArray = [
    {
      imgPath:thought,
      title:'The Thought',
      detailLink:'/get-category/the-thought',
    },
    {
      imgPath:eloquence,
      title:'The Eloquence',
      detailLink:'/get-category/the-eloquence',
    },
    {
      imgPath:expertise,
      title:'The Expertise',
      detailLink:'/get-category/the-expertise',
    },
    
  ]

  return (
  <div>
    {/* // top part of the main page  */}
    <div class={styles.container}>
      <div class={styles.content}>
        <h2>
          Source Code <span className={styles.styleGreen}>Academia </span>
          is a <span className={styles.styleGray}>global mission to build a </span>
          Muslim thought & identity…
        </h2>
        <h3>
          Anchoring the purpose of setting the
          students on the path of a
        </h3>
        <h1>GLOBAL CHANGE.</h1>
      </div>
      <div class={styles.background}>
        <Image
          src={myImage}
          width={800}
          alt="Picture of the author"
          className={styles.heroImage}
        />
      </div>
    </div>

    {/* // content part of the main page  */}
    <div className={styles.mainContent}>

      <section className={`${styles.subContent1} ${styles.centerContent}`}>
        <div className={styles.title}>
          <span style={{fontWeight:900,fontSize:'3rem'}}>THE</span>
          <span style={{fontWeight:900,fontSize:'9rem'}}>100</span>
          <span style={{fontWeight:800, fontSize:'2rem', backgroundColor:'greenyellow',width:'90%',padding:'0 10px'}}>YEAR PLAN</span>
        </div>
        <div className={styles.description}>
          <h3>
          <span style={{color:'grey'}}>Our aim to build the network of all our students</span> and connect them into an ecosystem of building knowledge skills and<span style={{color:'grey'}}> attributes required to solve the global problems for the</span> next century!
          </h3>
          <p style={{fontSize:'1.1rem',marginBottom:'30px'}}>
          Source Code introduces the platform for networking and building a sense of community for all its students and behaves as a community center with a deeper purpose of preparing its students to clarify the identity and purpose for any and every one of its students.
          </p>
          <Link href='/about-us' className={styles.btn}>Learn More</Link>
        </div>
      </section>

      <section className={`${styles.subContent2} ${styles.centerContent}`}>
        <div className={styles.skillsDescription}>
          <h2 style={{fontSize:'2.6rem',marginBottom:'25px'}}>Nurture the <span style={{color:'yellowgreen'}}>Next Generation</span> of Excellence</h2>

          <h3 style={{fontSize:'1.7rem',fontWeight:'500',marginBottom:'25px'}}>Identifying and developing the right skills in the current generation is crucial for meeting the needs of the next generation and achieving excellence over the long-term.</h3>

          <p style={{fontSize:'1.2rem',fontWeight:'400',marginBottom:'25px'}}>In order to meet the needs of the next generation and achieve excellence over the next hundred years, it is essential that we identify and cultivate the right skills in the current youth and adults. We have divided these skills into three categories:</p>
        </div>
        <div className={styles.skillCard}>
          {skillsArray.map((skill)=>(
            <Skills imgPath={skill.imgPath} title={skill.title} detailLink={skill.detailLink} />
          ))}
        </div>
        <p style={{fontSize:'1.2rem',fontWeight:'400',marginBottom:'25px'}}>
        Some skills may take multiple generations to fully develop, so it is important that we act quickly to identify the skills that are most necessary and begin working to enhance them. Without this focus on skill development, we may not be able to reach the milestones that are necessary for the future.
        </p>
      </section>

      <section className={`${styles.subContent1} ${styles.centerContent}`}>
        <div>
          <h2>Featured Courses</h2>
          <Link href='/courses' className={styles.btn}>View All Courses</Link>
        </div>
      </section>

    </div>

  </div>
  );
}
