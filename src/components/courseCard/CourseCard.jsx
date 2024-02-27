import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CourseCard.module.css'

const CourseCard = (props) => {
  return (
    <div className={styles.card}>
      <Image 
        src={props.imgURL}
        alt='course image'
        className={styles.img}
      />
      <div className={styles.subPart}>
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'7px'}}>
            <span>Beginner</span>
            <span>{props.duration}</span>
        </div>
        <h4 style={{height:'3rem'}}>{props.title}</h4>
        <Link href={props.linkTitleUrl} style={{textDecoration:'underline',marginBottom:'12px'}}>{props.linkTitle}</Link>
        <span>Starting From:</span>
        <h4 style={{fontSize:'1.2rem',color:'greenyellow',marginBottom:'19px'}}>PKR. {props.rupee}/Month</h4>
        <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Link href={props.detailUrl} className={styles.btn}>View Detail</Link>
            <FontAwesomeIcon
                icon={faBookmark}
                style={{fontSize:'1.5rem'}}
            />
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
