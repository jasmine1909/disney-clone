import React from 'react'
import styled from 'styled-components'

const Movies = () => {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
           
           <Wrap>
              <img src="https://assets.teenvogue.com/photos/5b6d931b4a40215ceb74536b/16:9/w_2560%2Cc_limit/tiana-lede.jpeg" />
           </Wrap>
           <Wrap>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/29755F81B42F39BEEFDC3D7B97BCDC5140FEB8787FB4B34EEE635A7FFF52A0FB/scale?width=1200&aspectRatio=1.78&format=jpeg" />
           </Wrap>
           <Wrap>
              <img src="https://i.pinimg.com/originals/81/4c/e6/814ce6458a0bcd3a2441405c6562f1ba.jpg" />
           </Wrap>
           
           <Wrap>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BEC6A9B6A7D86E7B131007796C620F38C9A1250D4F1703043208B5803BF47B1F/scale?width=2880&aspectRatio=1.78&format=jpeg"/>
           </Wrap>
           <Wrap>
               <img src="https://pbs.twimg.com/media/EG1tq6pU0AAlkoq?format=jpg&name=large"/>
           </Wrap>
           <Wrap>
               <img src="https://i2.wp.com/www.everythingmouse.com/wp-content/uploads/2020/08/jackjackattackdisneyplus-scaled.jpeg?fit=640%2C360&ssl=1"/>
           </Wrap>
           <Wrap>
               <img src="https://whatsondisneyplus.com/wp-content/uploads/2020/11/Finding-Nemo-1024x576.jpg"/>
           </Wrap>
           <Wrap>
              <img src="https://i.ytimg.com/vi/kiy4ki9sfKk/maxresdefault.jpg" />
           </Wrap>

           

        </Content>
    </Container>
  )
}

export default Movies
const Container = styled.div`
`
const Content = styled.div`
   display:grid;
   grid-gap:20px;
   grid-template-columns:repeat(4, minmax(0,1fr));
   `
const Wrap = styled.div`
   border-radius:10px;
   border:10px solid rgba(249,249,249,249,0.1);
   img{
       width:100%;
       height:100%;
       object-fit:cover;
   }
   &:hover{
       transform:scale(1.05);
       transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
       
               

   }
`