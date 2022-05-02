import React from 'react'
import styled from 'styled-components'

const Viewer = () => {
  return (
    <Container>
      <Wrap>
          <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
          <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
          <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
          <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
          <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  )
}

export default Viewer
const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns:repeat( 5, minmax(0,1fr));
    grid-gap:25px;
    
`
const Wrap = styled.div`
      border-radius:10px;

       border: 3px solid rgba(249,249,249,.1);
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
               
    img {
        width: 100%;
        height:100%;
        
        object-fit:cover;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
`