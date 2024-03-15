import React from 'react';
import styles from './DashboardHeader.module.css'
import Image from 'next/image';
import avatar from '../../../public/FacultyImages/avatarMale.png';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const DashboardHeader = () => {

  const {currentUser} = useSelector(state=>state.user);

  return (
    <div className={styles.mainContainer}>

      {/* 1st part of sub header */}
      <section className={styles.sec1Container}>
        <div className={styles.secContainer}>
          <Image src={avatar} alt='male-avatar' width={50} style={{backgroundColor:'white',borderRadius:'50%'}}/>
          <h2 style={{margin:'auto 0'}}>{currentUser.firstName} {currentUser.lastName}</h2>
        </div>
      </section>

      {/* 2nd part of sub header  */}
      <section className={styles.sec2Container}>
        <div className={styles.secContainer}>
          <Link href='/student-dashboard' className={styles.link}>Dashboard</Link>
          <Link href='/student-courses' className={styles.link}>My Courses</Link>
          <Link href='/quizzes' className={styles.link}>My Quizzes</Link>
          <Link href='/student-friend-and-families' className={styles.link}>Friends & Family</Link>
          <Link href='/student-experience' className={styles.link}>Your Experience</Link>
          <Link href='/complaints' className={styles.link}>Help & Support</Link>
        </div>
      </section>
    </div>
  )
}

export default DashboardHeader
