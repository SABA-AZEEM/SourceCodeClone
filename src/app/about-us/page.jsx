'use client'
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import pic1 from '../../../public/aboutImages/pic1.jpg';
import pic2 from '../../../public/aboutImages/pic2.jpg';
import logo from '../../../public/aboutImages/logo.svg';

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
            // First section container 
const FirstSectionContainer = styled.div`
    display: flex;
    flex-direction:column-reverse;
    gap: 20px;


    @media (min-width: 1000px) {
        flex-direction:row;
        justify-content: space-between;
    }
`;

const Line = styled.div`
  width  : 39px;
  height: 2px;
  background-color: black;
`;

const Content = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width:1000px) {
        width: 100%;
    }
`
            // Image Container
    const ImageContainer = styled.div`
    position: relative;
    display: flex;
    bottom:3rem;
    left:1rem;
    width: 100%;
`

const About = () => {
  return (
    <>
    <MainContainer>
      <SubContainer>

        {/* first section of about page */}
        <section>
           <FirstSectionContainer>
                <div >
                    <Image 
                        src={pic1} 
                        alt='sirSahil-image' 
                        style={{width:'100%',height:'100%'}}
                    />
                </div>
                <Content>
                    <h2 style={{fontSize:'2.6rem'}}>Source Code <span style={{color:'yellowGreen'}}>Academia</span> is mission of Source Code company.</h2>
                    <Line></Line>
                    <p style={{fontSize:'1.3rem'}}>Source Code Academia is mission of Source Code company. Source Code is a company aiming to trigger the source code of all creation to reach its ultimate purpose. We believe that all the source of knowledge and wisdom to know as well as to achieve the final goal of human beings is engrained within the code of the creation of human beings.</p>
                </Content>
            </FirstSectionContainer> 

            <ImageContainer>
                <Image src={logo}  style={{width:'150px',height:'150px'}}/>
                <h3 style={{margin:'4rem 2rem',fontSize:'2rem'}}>Our logo represents the double helix DNA model which carries the code of all we need to know.</h3>
            </ImageContainer>
        </section>

                            {/* Second section container */}
        <section>
            <h5 style={{fontSize:'1.7rem',fontWeight:'500'}}>
            The basis of all our knowledge the requirement of the skills required to set off on the journey, and to complete it is within this code. The attributes that we organically require to set the values are innate and need to be understood deeply. And that’s the basis of setting all our programs, and teachings.
            </h5>
            <p style={{fontSize:'1.2rem',margin:'1.8rem 0'}}>
            Our courses and programs, our campaigns and sessions are merely an attempt to make people aware and equipped with the arsenal of getting closer to deciphering this very source code of our existence.   
            </p>
        </section>

      </SubContainer>
    </MainContainer>

    <SubContainer>
        <h2 style={{fontSize:'2.7rem'}}>
            Why<br />
            <span style={{color:'yellowgreen'}}>Source Code?</span>
        </h2>
    </SubContainer>
    <MainContainer>
        <SubContainer>

            <section>
                <h5 style={{fontSize:'1.7rem',fontWeight:'500'}}>
                The plight of the knowledge, the skills and the attributes of muslims today are the reason why we have decided to reset the clock on all of what the central definitions of these parameters are. The worst thing that can ever happen for a doctrine is the lack of attractiveness of its adherents based on the natural order that every human being demands innately. We call it the original word order. Once the followers of the philosophy start achieving the attributes and speak of the knowledge and deliver it in the required eloquence that is most naturally and organically speaking to the innate questions of every human being, the philosophy takes over the specie without the requirement of any external influence.
                </h5>
                <p style={{fontSize:'1.2rem',margin:'1.8rem 0'}}>
                Our contention is that the way islam is described by the last few generations do not carry enough natural attraction that it used to have for every human being to fit the equations of their internal and external sufferings. The very demand of meaning in life is not fulfilled by the description of purpose and meaning by the philosophers of islam today. And the philosophers of islam who did convery the right meanings are made to become irrelevant by the current doctors of philosophy. Its not a fluke that the muslim today even doesn’t find it its his natural self to go towards islam. The problem is not in islam, but the way islam is being defined to him.
                </p>
            </section>
            
            <section style={{marginTop:'6rem'}}>
                <h3 style={{fontSize:'2.8rem',fontWeight:'700'}}>Source Code <span style={{color:'yellowgreen'}}>Academia</span> is our project to raise the speed of efficiency of achieving this purpose.</h3>

                <FirstSectionContainer style={{marginTop:'2.5rem'}}>
                    <Content>
                        <h4 style={{fontSize:'1.7rem',fontWeight:'500'}}>
                        The set of courses, the nature of courses, the length and quality of the courses are designed by the academia to ensure the seriousness of our belief in this vision.
                        </h4>
                        <p style={{fontSize:'1.2rem',margin:'1.8rem 0'}}>
                        This is the reason we chose training instead of just teaching the concepts so we can hone the knowledge into skills and harness it to evolve the right attributes required for everyone to come together under the same purpose. 
                        </p>
                    </Content>
                    <div>
                            <Image src={pic2} style={{width:'100%'}}/>
                    </div>
                </FirstSectionContainer>
                
            </section>
        </SubContainer>
    </MainContainer>
    </>
  )
}

export default About
