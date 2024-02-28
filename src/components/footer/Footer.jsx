import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css'


import logo from '../../../public/rootPageImages/logo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <section className={styles.container}>
            <section className={styles.upperPart}>
                <div className={styles.subPart1}>
                    <Image src={logo} alt='logo' width={200}/>
                    <p>Email: sabaazeem.it@gmail.com</p>
                    <h3>Join Our Mailing List</h3>
                    <div className={styles.mailingList}>
                        <input type="text" placeholder='Enter Your Email ID' />
                        <button>
                            <FontAwesomeIcon icon={faMessage}
                            style={{cursor:'pointer'}} 
                            />
                        </button>
                    </div>
                    <h3>Follow Us</h3>
                    <div style={{display:'flex',gap:'10px'}}>
                        <Link href={'/'}><FontAwesomeIcon icon={faFacebook} className={styles.icon}/></Link>

                        <Link href={'/'}><FontAwesomeIcon icon={faLinkedin} className={styles.icon}/></Link>

                        <Link href={'/'}><FontAwesomeIcon icon={faInstagram} className={styles.icon}/></Link>

                        <Link href={'/'}><FontAwesomeIcon icon={faYoutube} className={styles.icon}/></Link>

                        <Link href={'/'}><FontAwesomeIcon icon={faTwitter} className={styles.icon}/></Link>
                    </div>
                </div>

                <div className={styles.sec}>
                    <h3>Categories</h3>
                    <div className={styles.subSec}>
                    <Link href={'/get-category/the-thought'} >The Thought</Link>
                    <Link href={'/get-category/the-eloquence'} >The Eloquence</Link>
                    <Link href={'/get-category/the-expertise'} >The Expertise</Link>
                    </div>
                </div>

                <div className={styles.sec}>
                    <h3>About</h3>
                    <div className={styles.subSec}>
                    <Link href={'/about-us'} >About Us</Link>
                    <Link href={'/contact-us'} >Contact Us</Link>
                    <Link href={'/terms-of-use'} >Terms of Use</Link>
                    <Link href={'/privacy-policy'} >Privacy Policy</Link>
                    </div>
                </div>
                
                <div className={styles.sec}>
                    <h3>Learn More</h3>
                    <div className={styles.subSec}>
                    <Link href={'/faqs'}>FAQs</Link>
                    <Link href={'/blogs'} >Blogs</Link>
                    <Link href={'/knowledge-resources'} >Learning Resources</Link>
                    <Link href={'/jobs'} >Jobs</Link>
                    </div>
                </div>
                
            </section>
            <section className={styles.bottomPart}>
                <p>Copyright © 2024 sourcecode.academy All Rights Reserved. Developed By Saba Azeem.</p>
            </section>
        </section>
    </footer>
  )
}

export default Footer
