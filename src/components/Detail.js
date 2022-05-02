import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
       <Background>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C42A74B2CCC3E1FEC11B09A3EFF12DEB1A29663740CDAEBB5EFC713B9F97235/scale?width=1920&aspectRatio=1.78&format=jpeg" />
          
          </Background>
       <Control>
           <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
           </PlayButton>
           <TrailerButton>
               <img src="/images/play-icon-white.png" />
               <span>TRAILER</span>
           </TrailerButton>
           <AddButton>
                <span>+</span>
           </AddButton>
           <GroupWatchButton> 
                 <img src="/images/group-icon.png" />
           </GroupWatchButton>
       </Control>
       <SubTitle>
       June 15, 2018- Family, Kids, Animation
          
       </SubTitle>
       <Description>
       Bao opened in a Hackney car park in 2012 and has gone on to become one of the most lauded restaurants in London, with keen beans (this writer included) queuing outside day in, day out for a spot on its pews. Vital to that success is its visual identity, from the effortlessly iconic logo “Lonely Man” – a man scoffing a Bao bun – to the restaurant’s chic interiors, and more recently the eclectic and fun visuals for its many brand offshoots. So it may come as no surprise that the restaurant was started by two artists, now husband and wife Shing Tat Chung and Erchen Chang, along with Shing’s sister Wai Ting Chung.
       
       </Description>
       
    </Container>
  )
}

export default Detail
const Container = styled.div`
   min-height:calc(100vh-80px);
   padding:0 5vw;
   position:relative;
`

const Background = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    
`
const Control = styled.div`
margin-top: 100px;
display:flex;

align-items:center;
`
const PlayButton = styled.button`
border-radius:4px;
display:flex;
align-items:center;
padding:5px 24px;
;
background:rgba(2249,249,249);
border:none;
cursor:pointer;
letter-spacing:1.8px;
margin-right:20px;
   &:hover{
       background:rgba(198,198,198)
;   }


`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
 border:1px solid rgb(249,249,249);
 color: rgba(249,249,249);
 
 
)
`
const AddButton = styled.button`
   width:44px;
   height:44px;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   border:2px solid white;
   background:rgba(0,0,0,0.6);
   cursor:pointer;
   margin-right:16px;
   color:white;
   span{
       font-size:30px;

       
   }
`
const GroupWatchButton = styled(AddButton)`
background:rgb(0,0,0)


`
const SubTitle = styled.div`
color:rgb(2249,249,249);
font-size:15px;
margin-top:30px;
`
const Description = styled.div`
line-height:30px;
font-size:20px;
margin-top:30px;
width:60vw;
`