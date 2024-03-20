import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CourseCard.module.css'

const CourseCard = (props) => {

  const [isBookmarked,setIsBookmarked] = useState(false);

  const toggleBookMarked = ()=>{
    setIsBookmarked(!isBookmarked);
  }

  return (
    <div className={styles.card}>
      <Image 
        src={props.imgURL}
        alt='course image'
        width={200}
        height={200}
        className={styles.img}
      />
      <div className={styles.subPart}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'7px'}}>
            <span>{props.level ? props.level : 'Beginner' }</span>
            <span>{props.duration}</span>
        </div>
        <h4 style={{height:'3rem'}}>{props.title}</h4>
        <Link href={props.linkTitleUrl} style={{textDecoration:'underline',marginBottom:'12px'}}>{props.linkTitle}</Link>
        <span>Starting From:</span>
        <h4 style={{fontSize:'1.2rem',color:'yellowgreen',marginBottom:'19px'}}>PKR. {props.rupee}/Month</h4>
        <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Link href={props.detailUrl} className={styles.btn}>View Detail</Link>
            <FontAwesomeIcon
                icon={faBookmark}
                className={`${styles.bookmark} ${isBookmarked ? styles.bookmarked : ''}`}
                onClick={toggleBookMarked}
            />
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
