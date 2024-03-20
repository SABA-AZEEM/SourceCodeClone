'use client'
import React, { useEffect, useState } from 'react';
import styles from './DashboardHeader.module.css'
import Image from 'next/image';
import avatar from '../../../public/FacultyImages/avatarMale.png';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const DashboardHeader = () => {

  const {currentUser} = useSelector(state=>state.user);
  const pathname = usePathname();
  

  return (
    <div className={styles.mainContainer}>

      {/* 1st part of sub header */}
      <section className={styles.sec1Container}>
        <div className={styles.secContainer}>
          <Image src={avatar} alt='male-avatar' width={50} style={{backgroundColor:'white',borderRadius:'50%'}}/>
          
          {currentUser && (
          <h2 style={{margin:'auto 0'}}>{currentUser.firstName} {currentUser.lastName}</h2>
          )}

        </div>
      </section>

      {/* 2nd part of sub header  */}
      <section className={styles.sec2Container}>
        <div className={styles.secContainer}>
          <Link 
            href='/student-dashboard' 
            className={`${styles.link} ${pathname==='/student-dashboard' ? styles.active : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            href='/student-courses' 
            className={`${styles.link} ${pathname==='/student-courses' ? styles.active : ''}`}
          >
            My Courses
          </Link>
          <Link 
            href='/quizzes' 
            className={`${styles.link} ${pathname==='/quizzes' ? styles.active : ''}`}
          >
            My Quizzes
          </Link>
          <Link 
            href='/student-friend-and-families' 
            className={`${styles.link} ${pathname==='/student-friend-and-families' ? styles.active : ''}`}
          >
            Friends & Family
          </Link>
          <Link 
            href='/student-experience' 
            className={`${styles.link} ${pathname==='/student-experience' ? styles.active : ''}`}
          >
            Your Experience
          </Link>
          <Link 
            href='/complaints' 
            className={`${styles.link} ${pathname==='/complaints' ? styles.active : ''}`}
          >
            Help & Support
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DashboardHeader
