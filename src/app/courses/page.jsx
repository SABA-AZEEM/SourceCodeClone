'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import CourseCard from '@/components/courseCard/CourseCard';
import { useDispatch } from 'react-redux';
import { storeCourses } from '../GlobalRedux/features/Courses/courseSlice';

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

    const [coursesData,setCoursesData] = useState([]);
    const dispatch = useDispatch();

    useEffect( () => {
        const fetchData = async ()=>{
            try {
                const response = (await fetch('http://localhost:8000/api/courses'));
              
                if (!response.ok) {
                  throw new Error(`Failed to fetch courses: ${response.statusText}`);
                }
                const coursesData = await response.json()
                console.log("data", coursesData);
                setCoursesData(coursesData);
                dispatch(storeCourses(coursesData));
                console.log("after displatch")
              } catch (error) {
                console.error('Error fetching courses:', error);
              }
        }
        fetchData();
      }, []);
      

  return (
    <MainContainer>
        <SubContainer>
            <div>
                <h3 style={{fontSize:'1.3rem',marginBottom:'2rem'}}><span style={{color:'yellowgreen'}}>Skill Development</span> Courses</h3>
                
                <CardContainer>

                {
                   coursesData.map((course)=>(

                    course.category!=='coaching-courses' &&
                        <CourseCard
                            key={course._id}
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
                   coursesData.map((course)=>(
                    course.category==='coaching-courses' &&
                        <CourseCard
                            key={course._id}
                            id={course._id}
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
        {/* <ToastContainer position='bottom-right' /> */}
    </MainContainer>
  )
}

export default Courses
