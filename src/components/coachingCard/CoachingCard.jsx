import Link from 'next/link'
import React from 'react'
import styles from './CoachingCard.module.css'

const CoachingCard = (props) => {
  return (
    <div className={styles.cardBox}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <Link href={props.bookingURL}className={styles.link}>Book Now</Link>
    </div>
  )
}

export default CoachingCard
