import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import myImage from '../../public/rootPageImages/main-hero-image.jpg';
import coachingImg from '../../public/rootPageImages/coachingImage.webp';
import teach from '../../public/rootPageImages/teachWithUs.webp';

import { skillsArray } from "../../public/data/skillsData";
import { stemCourses } from "../../public/data/stemCoursesData";
import { featuredCourses } from "../../public/data/featuredCoursesData";
import { coachingData } from "../../public/data/coachingData";

import CourseCard from "@/components/courseCard/CourseCard";
import Skills from "@/components/skills/Skills";
import CoachingCard from "@/components/coachingCard/CoachingCard";


export default function Home() {

  

  return (
  <div>
    {/* // top part of the main page  */}
    <div className={styles.container}>
      <div className={styles.content}>
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

      <section className={styles.centerContent}>
        <div className={styles.skillsDescription}>
          <h2 style={{fontSize:'2.6rem',marginBottom:'25px'}}>Nurture the <span style={{color:'yellowgreen'}}>Next Generation</span> of Excellence</h2>

          <h3 style={{fontSize:'1.7rem',fontWeight:'500',marginBottom:'25px'}}>Identifying and developing the right skills in the current generation is crucial for meeting the needs of the next generation and achieving excellence over the long-term.</h3>

          <p style={{fontSize:'1.2rem',fontWeight:'400',marginBottom:'25px'}}>In order to meet the needs of the next generation and achieve excellence over the next hundred years, it is essential that we identify and cultivate the right skills in the current youth and adults. We have divided these skills into three categories:</p>
        </div>
        <div className={styles.skillCard}>
          {skillsArray.map((skill)=>(
            <Skills key={skill.id} imgPath={skill.imgPath} title={skill.title} detailLink={skill.detailLink} />
          ))}
        </div>
        <p style={{fontSize:'1.2rem',fontWeight:'400',marginBottom:'25px'}}>
        Some skills may take multiple generations to fully develop, so it is important that we act quickly to identify the skills that are most necessary and begin working to enhance them. Without this focus on skill development, we may not be able to reach the milestones that are necessary for the future.
        </p>
      </section>

      <section className={styles.centerContent}>
        <div className={styles.heading}>
          <h2 style={{fontSize:'2.5rem'}}>Featured Courses</h2>
          <Link href='/courses' className={styles.btn}>View All Courses</Link>
        </div>
        <div className={styles.course}>
          {featuredCourses.map((course)=>(
            <CourseCard
              key={course.id}
              imgURL={course.imgURL}
              duration={course.duration}
              title={course.title}
              linkTitle={course.linkTitle}
              linkTitleUrl={course.linkTitleUrl}
              rupee={course.rupee}
              detailUrl={course.detailUrl}
            />
          ))}
        </div>
      </section>

      <section className={styles.centerContent}>
        <h2 style={{textAlign:'center',fontSize:'2rem'}}>STEM Courses</h2>
        <div className={styles.line}></div>
        <p className={styles.stemInfo}>All of these STEM courses, accredited and aligned with modern standards of education, will be starting this summer, allowing students to excel in commercial certifications within just 3 to 4 years.</p>
        <div className={styles.course}>
          {stemCourses.map((course)=>(
            <CourseCard
              key={course.id}
              imgURL={course.imgURL}
              duration={course.duration}
              title={course.title}
              linkTitle={course.linkTitle}
              linkTitleUrl={course.linkTitleUrl}
              rupee={course.rupee}
              detailUrl={course.detailUrl}
            />
          ))}
        </div>
      </section>

      <section className={`${styles.subContent5} ${styles.centerContent}`}>
            <div>
              <Image src=     {coachingImg} alt="coaching image"
              className={styles.img} 
              />
            </div>
            <div className={styles.coachingContent}>
              <h3 style={{fontWeight:'900',fontSize:'1.7rem',marginBottom:'10px'}}>Elevate Your Potential with</h3>
              <h2 style={{fontWeight:'900',fontSize:'2.7rem',marginBottom:'10px',
              color:'yellowgreen'}}>Expert Coaching</h2>
              <div className={styles.line2}></div>
              <p style={{color:'gray',fontSize:'1.2rem',marginBottom:'25px'}}>Take your personal and professional development to the next level with expert coaching from our team of domain experts. Our one-on-one coaching sessions are tailored to your specific needs and goals, providing you with the support and guidance you need to succeed.</p>
              <div className={styles.coachingCardContainer}>
                {
                  coachingData.map((data)=>(
                    <CoachingCard 
                      key={data.id}
                      title={data.title}
                      description={data.description}
                      bookingURL={data.bookingURL}
                    />
                  ))
                }
              </div>
            </div>
      </section>

      <section className={styles.subContent6}>
        <div className={styles.teachContainer}>
          <div>
            <Image src={teach} alt="teach with us" className={styles.teachImage}/>
          </div>
          <div className={styles.teachContentContainer}>
            <div className={styles.teachContent}>
            <h2 style={{fontSize:'2.5rem',fontWeight:'800',marginBottom:'10px'}}>Teach with Us</h2>
            <div className={styles.line2}></div>
            <p style={{fontSize:'1.3rem'}}>
              Join the ranks of our esteemed instructors at Source Code Academia and become a driving force in the global effort to enhance Muslim competency. As a member of our community, you will have the opportunity to make a real difference in the lives of students around the world and be a part of a movement that is working towards positive change. Together, we can create a brighter future for all.
            </p>
          </div>
          </div>
          <div className={styles.joinText}>
            <h3>Join Us!</h3>
          </div>
        </div>
      </section>

    </div>

  </div>
  );
}
