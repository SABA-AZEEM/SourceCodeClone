'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { redirect } from 'next/navigation';

const MainContainer = styled.div`
  background-image: url('/loginPageImage/img2.jpg');
  /* opacity: 0.3; */
  /* filter: grayscale(1); */
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

  const [emailAddress,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginHandler = async(event)=>{
    event.preventDefault();
    
    try{
      const response = await fetch('http://localhost:8000/api/users/login',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({emailAddress,password})
      });
      if(response.ok){
        const userData = await response.json();
        console.log('Login Successfull!');
        console.log('User Data:', userData);
        redirect('/student-dashboard');
      }else{
        console.error('Login failed');
      }
    }catch(error){
      console.error('Error occurred while logging in:', error)
    }
  }

  return (
    <MainContainer>
        <SubContainer>
            <h3 style={{textAlign:'center',marginBottom:'1rem'}}>Sign in to your account</h3>
            <form onSubmit={loginHandler} style={{display:'flex',flexDirection:'column',gap:'5px'}}>
                <label htmlFor="email">Email</label>
                <StyledInput type="email" id="email" value={emailAddress} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <StyledInput type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' onClick={loginHandler} style={{margin:'1rem 0',padding:'0.5rem',cursor:'pointer',fontWeight:'800',backgroundColor:'black'}}>Login</button>
            </form>
            <div style={{margin:'1rem 0',textAlign:'center'}}>
                <p>Don't have an account already?</p>
                <Link href='/register' style={{fontWeight:'800',textDecoration:'underline'}}>Sign Up Now</Link>
            </div>
        </SubContainer>
    </MainContainer>
  )
}

export default Login
