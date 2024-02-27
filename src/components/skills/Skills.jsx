import Image from "next/image"
import Link from "next/link"
import styles from './Skills.module.css';

const Skills = ({imgPath,title,detailLink}) => {
  return (
    <div className={styles.skillsContainer}>
      <Image 
        src={imgPath}
        className={styles.skillImg}
      />
      <h3 style={{fontSize:'1.6rem',color:'greenyellow',margin:'20px 0'}}>{title}</h3>
      <Link href={detailLink} style={{fontWeight:'700'}}>View Detail</Link>
    </div>
  )
}

export default Skills
