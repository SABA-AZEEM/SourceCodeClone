'use client'
import React from 'react';
import styled from 'styled-components';

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
`

const page = () => {
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
        </SubContainer>
    </MainContainer>
  )
}

export default page
