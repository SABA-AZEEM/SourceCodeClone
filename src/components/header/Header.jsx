'use client'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faMessage, faClock, faUser,  faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link';
import styles from './Header.module.css';

import { useSelector } from 'react-redux';
import DropDownMenu from '../dropDownMenu/dropDownMenu';
import { usePathname } from 'next/navigation';




const Header = () => {
    
    //Define state to hold the current time
    const [currentTime, setCurrentTime]=useState('');
    const {currentUser} = useSelector(state=>state.user);
    const [dropState, setDropState] = useState(false);
    const pathname = usePathname();

    useEffect(()=>{
        if(pathname==='/login'){
            setDropState(false);
        }
    },[pathname])


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

    //show drop down meny
    const showDropDownMenu = ()=>{
        setDropState(!dropState);
    }
    
    //Update the current time 
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentTime(getCurrentTime());
        },1000);
        return () => clearInterval(intervalId);
        setDropState(false);
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
                {
                    currentUser ? 
                    <div onClick={showDropDownMenu} style={{cursor:'pointer'}}>
                        {currentUser.firstName}
                        <FontAwesomeIcon 
                            icon={faAngleDown} 
                            style={{marginLeft:'5px'}}
                        />
                    </div>
                    : 
                    <Link href='/login'>Login/Register</Link>
                }
                
            </section>

            <div style={{position:'absolute',right:0,top:'3rem'}}>
                { dropState && currentUser && <DropDownMenu /> }
            </div>
            

        </section>

            {/* bottom part of the header  */}
        <section className={styles.headerBottom}>
            <section className={styles.navLink}>

                <Link href='/'>
                    <img src="https://sourcecode.academy/images/Sourcecode-Academia-BE-w.png" alt="logo" className={styles.logo}/>   
                </Link>

                    {/* Category Button  */}
                <div className={styles.dropdown}>
                    <div className={styles.subBtn}>
                        <button className={styles.dropbtn}>Categories</button>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.dropdownContent}>
                        <div className={styles.subDropdown1}>
                            <div className={styles.subBtn}>
                                <button className={styles.dropbtn}>The Thought</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className={styles.subDropdownContent1}>
                                <Link href='/sub-category/critical-thinking' className={styles.link}>Critical Thinking</Link>
                                <Link href='/sub-category/research-analysis' className={styles.link}>Research & Analysis</Link>
                                <Link href='/sub-category/world-view' className={styles.link}>World View</Link>
                                <Link href='/sub-category/logic-reasoning' className={styles.link}>Logic & Reasoning</Link>
                            </div>
                        </div>
                        <div className={styles.subDropdown1}>
                            <div className={styles.subBtn}>
                                <button className={styles.dropbtn}>The Eloquence</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className={styles.subDropdownContent1}>
                                <Link href='/sub-category/arabic-language' className={styles.link}>Arabic Language</Link>
                                <Link href='/sub-category/emotional-intelligence' className={styles.link}>Emotional Intelligence</Link>
                            </div>
                        </div>
                        <div className={styles.subDropdown1}>
                            <div className={styles.subBtn}>
                                <button className={styles.dropbtn}>The Experties</button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <div className={styles.subDropdownContent1}>
                                <Link href='/sub-category/mathematics' className={styles.link}>Mathematics</Link>
                                <Link href='/sub-category/physics' className={styles.link}>Physics</Link>
                                <Link href='/sub-category/biology' className={styles.link}>Biology</Link>
                                <Link href='/sub-category/chemistry' className={styles.link}>Chemistry</Link>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Coaching Button */}
                <div className={styles.dropdown}>
                    <div className={styles.subBtn}>
                        <button className={styles.dropbtn}>Coaching</button>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.dropdownContent}>
                        <Link href='/courses-detail/personal-counseling-coaching' className={styles.link}>Personal Counselling & Coaching</Link>
                        <Link href='/courses-detail/business-coaching' className={styles.link}>Business Coaching</Link>
                        <Link href='/courses-detail/teen-mentorship-program-16-18-yrs' className={styles.link}>Teen Mentorship Program (16-18 Yrs)</Link>
                    </div>
                </div>

                <Link href='/about-us'>About Us</Link>
                <Link href='/courses'>Courses</Link>
                <Link href='/instructor-list'>Our Faculty</Link>
                <Link href='/blogs'>Blogs</Link>

            </section>

            <section className={styles.teach_contact}>
                <Link href='become-instructor'
                className={styles.teachContactButton}>Teach with Us</Link>
            </section>
        </section>
    </header>
    </div>
  )
}

export default Header
