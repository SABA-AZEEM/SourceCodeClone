import Image from 'next/image'
import React from 'react'

import styles from './TopPart.module.css';



const TopPart = (props) => {
  return (
    <div className={styles.top}>

      <div className={styles.topSub1}>
        <div style={{margin:'auto 0'}}>
            <h1 style={{fontSize:'3.3rem',marginBottom:'1.4rem'}}>{props.heading}</h1>
            <p><span>Category: </span> {props.category}</p>
            <p><span>Duration: </span> {props.duration}</p>
        </div>
        <div>
            <Image src={props.mainImg} alt='main-image' className={styles.img}/>
        </div>
      </div>

      <div className={styles.topSub2}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default TopPart
