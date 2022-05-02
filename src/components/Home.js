import React,{ useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewer  from './Viewer'
import Movies from './Movies'

const Home = () => {






  return (
    <Container>
       <ImgSlider />
       <Viewer />
       <Movies />
        
    </Container>
  )
}

export default Home
const Container = styled.main`
   min-height: calc(100vh - 80px);
   background:#2B3041   ;
   padding:5vw;
   overflow-x:hidden;
  
`