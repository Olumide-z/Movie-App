import React from 'react'
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';

const About = ({ title }) => {
  return (
    <Container>
      <Heading title={'About MovieLand'} />
    </Container>
  )
}

const Container = styled.div`
  padding: 100px 50px 0 50px;
  min-height: 100vh;
  
  @media screen and (max-width: 300px){
    width: 300px;
  }
`


export default About