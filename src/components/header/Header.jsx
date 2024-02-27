'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMessage, faClock, faUser, faBoxesStacked, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link';
import styles from './Header.module.css';




const Header = () => {
    //Define state to hold the current time
    const [currentTime, setCurrentTime]=useState('');

    const getCurrentTime = ()=>{
        //get current time according to lacal time
        let currentTime = new Date();
        let currentHour = currentTime.getHours();
        let currenMinute = currentTime.getMinutes();
        let currentSecond = currentTime.getSeconds();
        let meridiem = currentHour >12 ?'PM':'AM';

        let time = currentHour+":"+currenMinute+":"+currentSecond+meridiem;
        return time;
    }
    
    //Update the current time 
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentTime(getCurrentTime());
        },1000);
        return () => clearInterval(intervalId);
    },[]);

    
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            {/* top part of the headr */}
        <section className={styles.headerTop}>
            <section className={styles.inlineComponents}>
                <div className={styles.inlineComponents}>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                    <p>+92 123 4567899</p>
                </div>
                <div className={styles.inlineComponents}>
                    <FontAwesomeIcon icon={faMessage} className={styles.icon}/>
                    <p>sabaazeem.it@gmail.com</p>
                </div>
            </section>
            <section className={styles.inlineComponents}>
                <div>
                    <p>Time Zone: Asia/Karachi</p>
                </div>
                <div className={styles.inlineComponents}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon}/>
                    <p>{currentTime}</p>
                </div>
            </section>
            <section className={styles.auth}>
                <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                <Link href='login'>Login/Register</Link>
            </section>

        </section>

            {/* bottom part of the header  */}
        <section className={styles.headerBottom}>
            <section className={styles.navLink}>

                <Link href='/'>
                    <img src="https://sourcecode.academy/images/Sourcecode-Academia-BE-w.png" alt="logo" className={styles.logo}/>   
                </Link>

                <div>
                    <div className={styles.categoryButtonContainer}>
                        <button className={styles.categoryButton}>Categories</button>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.categoryButtonSubContainer}>
                        <div>
                            <div>
                                <button>The Thought</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div>
                                <Link href='#'>Critical Analysis</Link>
                                <Link href='#'>Research & Analysis</Link>
                                <Link href='#'>World View</Link>
                                <Link href='#'>Logical & Reasoning</Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button>The Eloquence</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div>
                                <Link href='#'>Arabic Language</Link>
                                <Link href='#'>Emotional Intelligence</Link>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button>The Experties</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div>
                                <Link href='#'>Mathematics</Link>
                                <Link href='#'>Physics</Link>
                                <Link href='#'>Biology</Link>
                                <Link href='#'>Chemistry</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <div >
                        <button className={styles.coachingButton}>Coaching</button>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.coachingContainer}>
                        <Link href='#'>Personal Counselling & Coaching</Link>
                        <Link href='#'>Business Coaching</Link>
                        <Link href='#'>Teen Mentorship Program (16-18 Yrs)</Link>
                    </div>
                </div>

                <Link href='about-us'>About Us</Link>
                <Link href='courses'>Courses</Link>
                <Link href='instructor-list'>Our Faculty</Link>
                <Link href='Blogs'>Blogs</Link>

            </section>

            <section className={styles.teach_contact}>
                <Link href='become-instructor'>Teach with Us</Link>
            </section>
        </section>
    </header>
    </div>
  )
}

export default Header
