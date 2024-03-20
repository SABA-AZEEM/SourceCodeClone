'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { signInSuccess } from '../GlobalRedux/features/User/userSlice';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';


const MainContainer = styled.div`
  background-image: url('/signUpPageImages/pic1.webp');
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
  width: 300px;
`;


const Register = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [emailAddress,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const signUpHandler = async(event)=>{
    event.preventDefault();
    
    if(password===confirmPassword){
    try{
      const response = await fetch('http://localhost:8000/api/users',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({firstName,lastName,emailAddress,password,confirmPassword}),
        credentials: 'include',
      });
      if(response.ok){
        const userData = await response.json();
        toast.success('SignUp Successfull!');
        console.log('User Data:', userData);
        dispatch(signInSuccess(userData));
        router.push('/student-dashboard');
      }else{
        toast.error('SignUp failed!');
      }
    }catch(error){
      console.error('Error occurred while signup:', error)
    }
    }else{
        toast.error('Passwords do not match');
        console.log('Passwords do not match');
    }
  }

  return (
    <MainContainer>
        <SubContainer>
            <h3 style={{textAlign:'center',marginBottom:'1rem'}}>Register a new account</h3>
            <form onSubmit={signUpHandler} style={{display:'flex',flexDirection:'column',gap:'5px'}}>

                <label htmlFor="fname">First Name</label>
                <StyledInput type="text" id="fname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <label htmlFor="lname">Last Name</label>
                <StyledInput type="text" id="lname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <label htmlFor="email">Email Address</label>
                <StyledInput type="email" id="email" value={emailAddress} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <StyledInput type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <StyledInput type="password" id="confrimPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

                <button 
                    type='submit' 
                    onClick={signUpHandler} 
                    style={{margin:'1rem 0',padding:'0.5rem',cursor:'pointer',fontWeight:'800',backgroundColor:'black'}}
                >
                    Sign Up
                </button>
            </form>
            <div style={{margin:'1rem 0',textAlign:'center'}}>
                <Link href='/login' style={{fontWeight:'800',textDecoration:'underline'}}>Login Instead</Link>
            </div>
        </SubContainer>
        <ToastContainer position='bottom-right'/>
    </MainContainer>
  )
}

export default Register;
