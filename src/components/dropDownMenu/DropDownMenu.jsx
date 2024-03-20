'use client'
import Link from 'next/link'
import React from 'react'
import styles from './DropDownMenu.module.css';
import { usePathname } from 'next/navigation';


const DropDownMenu = () => {

  const pathName = usePathname();

    const handleLogout = async()=>{
        await fetch('http://localhost:8000/api/users/logout',{
          method:'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({}),
          credentials: 'include',
        });
    }

  return (
    <div className={styles.mainContainer}>
      <Link href='/student-dashboard' className={styles.link}>Dashboard</Link>
      <Link href='/student-courses' className={styles.link}>My Course</Link>
      <Link href='/quizzes' className={styles.link}>My Quiz</Link>
      <Link href='/student-bookmarks' className={styles.link}>Bookmarks</Link>
      <Link href='/student-friend-and-families' className={styles.link}>Friends & Family</Link>
      <Link href='/student-payment' className={styles.link}>Payment Info</Link>
      <Link href='/profile' className={styles.link}>My Profile</Link>
      <Link href='/student-setting' className={styles.link}>Update Password</Link>
      <Link href='/student-experience' className={styles.link}>Your Experience</Link>
      <Link href='/complaints' className={styles.link}>Help & Support</Link>
      <Link href='/login' className={styles.link} onClick={handleLogout}>Logout</Link>
    </div>
  )
}

export default DropDownMenu
