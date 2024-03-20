'use client';
import React from 'react';
import styled from 'styled-components';
import { blogData } from '../../../public/data/blogData';
import BlogCard from '@/components/blogCard/BlogCard';

const MainContainer = styled.div`
    background-image: url('/blogImages/pic1.jpg');
    color:black;
    opacity: 0.3;
    filter:grayscale(1);
    background-size: cover;
`;
const SubContainer = styled.div`
    padding: 3rem 0;
    width: 70%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 3rem 1rem;
    }
`;
const BlogsContaienr = styled.div`
    display: flex;
    gap: 20px;
`;
const MainContainerT= styled.div`
   background-color : white;
   color: black;
`

const page = () => {
  return (
    <>
    <MainContainer>
        <SubContainer>
            <div style={{margin:'15rem 0',color:'white'}}>
                <h1 style={{fontSize:'3.5rem'}}>OUR BLOGS</h1>
                <p style={{fontSize:'1.5rem',width:'70%',marginTop:'1rem',fontWeight:'600'}}>Check out our blog for a collection of informative articles and insights on a variety of topics.</p>
            </div>
            
        </SubContainer>
    </MainContainer>

    <MainContainerT>
        <SubContainer>
        <BlogsContaienr>
                {
                    blogData.map((blog)=>(
                        <BlogCard
                           key={blog.id} 
                           img={blog.img}
                           title={blog.title}
                           titleLink={blog.titleLink}
                           date={blog.date}
                        />
                    ))
                }
            </BlogsContaienr>
        </SubContainer>
    </MainContainerT>
    </>
  )
}

export default page
