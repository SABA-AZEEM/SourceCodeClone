'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { facultyData } from '../../../public/data/facultyData';
import Faculty from '@/components/facultyCard/page';

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
const Line = styled.div`
    height: 2px;
    width: 30px;
    background-color: yellowgreen;
    margin: 1rem 0;
`;
const FacultyContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    gap: 10px;
`;
const Button = styled.button`
    background-color: white;
    color: black;
    padding: 5px;
    outline: none;
    /* border: none; */
`

const page = () => {

    const [faculty, setFaculty] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    useEffect(() => {
        fetchData();
    },[currentPage]);

    function fetchData(){
        const response = facultyData.filter((faculty,idx)=>{
            if( idx < (currentPage*4) && idx >=(currentPage*4-4)){
                return faculty
            }
        });
        setFaculty(response);
    }

    const handleNextPage = () =>{
        setCurrentPage(currentPage+1);
    };

    const handlePrevPage = () =>{
        setCurrentPage(currentPage-1);
    }

  return (
    <MainContainer>
        <SubContainer>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <h2 style={{fontSize:'1.7rem'}}>Our Facutly</h2>
                <input 
                    type="text" 
                    placeholder='Search...'
                    style={{
                        backgroundColor:'white',
                        border:'1px solid lightGray',
                        outline:'yellowGreen',
                        color:'black',
                        padding:'0 1rem'
                    }} 
                />
            </div>
            <Line></Line>
            
            <FacultyContainer>
                {
                    faculty.map((faculty)=>(
                       <Faculty
                            key={faculty.id}
                            img={faculty.img}
                            name={faculty.name}
                        />
                    ))
                }
            </FacultyContainer>

            <ButtonContainer>
                <Button onClick={handlePrevPage} disabled={currentPage===1} >Previous</Button>
                <span style={{alignSelf:'center',padding:'5px'}}>{currentPage}</span>
                <Button onClick={handleNextPage} disabled={currentPage===pageSize}>Next</Button>
            </ButtonContainer>
            
        </SubContainer>
    </MainContainer>
  )
}

export default page
