'use client'
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-image: url('/loginPageImage/img2.jpg');
  opacity: 0.3;
  filter: grayscale(1);
  background-size:cover;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubContainer = styled.div`
   background-color :white ;
   color: black;
   display: block;
   filter: grayscale(0);
   opacity: 1;
   padding: 2rem;
`;
const StyledInput = styled.input`
  background-color: white;
  color: black;
  padding: 10px;
  outline: yellowgreen;
  border: 1px solid gray;
`;


const Login = () => {
  return (
    <MainContainer>
        <SubContainer>
            <h3 style={{textAlign:'center',marginBottom:'1rem'}}>Sign in to your account</h3>
            <form action="/student-dashboard" style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                <label htmlFor="email">Email</label>
                <StyledInput type="email" id="email" />
                <label htmlFor="password">Password</label>
                <StyledInput type="password" id="password" />
                <button type='submit' style={{margin:'1rem 0',padding:'0.5rem',cursor:'pointer',fontWeight:'800'}}>Login</button>
            </form>
            <div style={{margin:'1rem 0',textAlign:'center'}}>
                <p>Don't have an account already?</p>
                <Link href='/register' style={{fontWeight:'800'}}>Sign Up Now</Link>
            </div>
        </SubContainer>
    </MainContainer>
  )
}

export default Login
