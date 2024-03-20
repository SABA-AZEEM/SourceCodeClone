import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* width: 250px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    flex-basis:25%;

    &:hover{
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
    }
`

const Faculty = (props) => {
  return (
    <Container>
        <Image src={props.img} style={{width:'100%',height:'200px'}}/>
        <h3>{props.name}</h3>
        <Link href='#'>View Profile</Link>
    </Container>
  )
}

export default Faculty
