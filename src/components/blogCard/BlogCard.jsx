import React from 'react'
import styled from 'styled-components';
import pic2 from '../../../public/blogImages/pic2.jpg';
import pic3 from '../../../public/blogImages/pic3.jpg';
import Image from 'next/image';
import Link from 'next/link';

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BlogCard = (props) => {
  return (
    <BlogContainer>
      <Image src={props.img} style={{width:'100%'}}/>
      <Link href={props.titleLink} style={{fontSize:'1.3rem',fontWeight:'600',textDecoration:'underline'}}>{props.title}</Link>
      <span>{props.date}</span>
    </BlogContainer>
  )
}

export default BlogCard
