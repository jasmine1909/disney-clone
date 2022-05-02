import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
    <CTA>
       <CTALogoOne src="/images/cta-logo-one.svg" />
       <SignUp>Get All There</SignUp>
       <Description>
       Classic favorites. New releases. Disney Channel throwbacks. Exclusive Original series. From classics to new releases, get access to stories you can't stream anywhere else. Sign Up Now. Stream Anywhere, Anytime. Download and Go. Brands: Marvel, Pixar, Disney.
       </Description>
       <CTALogoTwo src="/images/cta-logo-two.png" />
    </CTA>
    </Container>
  )
}

export default Login

const Container = styled.main`

     
min-height: calc(100vh - 80px);
background-image: grey  ;
padding:16vw;
overflow-x:hidden;

    
    
   
    
     }
`
const CTA = styled.div`


  
`
const CTALogoOne = styled.div`



`
const SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
margin-top:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
border-radius:4px;
color:#f9f9f9;
text-align:center;
padding:12px 0;
transition:all 250ms;
letter-spacing:1.5px;
text-transform:uppercase;
&:hover{
    background:#0483ee;
}

`
const Description = styled.p`
letter-spacing:1.5px;
font-size:18px;
text-align:center;
margin-top:50px;

`
const CTALogoTwo  =styled.img`
width:100%;
height:100%;
object-fit:cover;
margin-top:30px;
`