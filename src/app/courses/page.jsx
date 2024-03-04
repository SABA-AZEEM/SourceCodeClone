'use client'
import React from 'react';
import styled from 'styled-components';

import { stemCourses } from '../../../public/data/stemCoursesData';
import { arabicCourses } from '../../../public/data/arabicCourseData';
import { CoursesData } from '../../../public/data/coursesData';
import { CoachingData } from '../../../public/data/coaching&counselingData';

import CourseCard from '@/components/courseCard/CourseCard';

const MainContainer = styled.div`
    background-color:white;
    color:black;
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
const CardContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 40px;
`

const Courses = () => {
  return (
    <MainContainer>
        <SubContainer>
            <div>
                <h3 style={{fontSize:'1.3rem',marginBottom:'2rem'}}><span style={{color:'yellowgreen'}}>Skill Development</span> Courses</h3>
                
                <CardContainer>
                {
                    stemCourses.map((course)=>(
                        <CourseCard
                            key={course.id}
                            imgURL={course.imgURL}
                            duration={course.duration}
                            title={course.title}
                            linkTitle={course.linkTitle}
                            linkTitleUrl={course.linkTitleUrl}
                            rupee={course.rupee}
                            detailUrl={course.detailUrl}
                        />
                    ))

                }

                {
                    arabicCourses.map((course)=>(
                        <CourseCard
                            key={course.id}
                            imgURL={course.imgURL}
                            duration={course.duration}
                            title={course.title}
                            linkTitle={course.linkTitle}
                            linkTitleUrl={course.linkTitleUrl}
                            rupee={course.rupee}
                            detailUrl={course.detailUrl}
                        />
                    ))
                }

                {
                   CoursesData.map((course)=>(
                        <CourseCard
                            key={course.id}
                            imgURL={course.imgURL}
                            duration={course.duration}
                            title={course.title}
                            linkTitle={course.linkTitle}
                            linkTitleUrl={course.linkTitleUrl}
                            rupee={course.rupee}
                            detailUrl={course.detailUrl}
                        />
                    )) 
                }
                </CardContainer>
            
            </div>

            <div style={{margin:'6rem 0'}}>
                <h3 style={{fontSize:'1.3rem',marginBottom:'2rem'}}><span style={{color:'yellowgreen'}}>Coaching & Counseling</span> Sessions</h3>

            <CardContainer>
                {
                   CoachingData.map((course)=>(
                        <CourseCard
                            key={course.id}
                            imgURL={course.imgURL}
                            duration={course.duration}
                            title={course.title}
                            linkTitle={course.linkTitle}
                            linkTitleUrl={course.linkTitleUrl}
                            rupee={course.rupee}
                            detailUrl={course.detailUrl}
                        />
                    )) 
                }
            </CardContainer>
            </div>
        </SubContainer>
    </MainContainer>
  )
}

export default Courses
