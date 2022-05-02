import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <Carousel {...settings}>
       <Wrap>
          <img src="/images/slider-badging.jpg" />
       </Wrap>
       <Wrap>
          <img src="/images/slider-badag.jpg" />
       </Wrap>
       <Wrap>
          <img src="/images/slider-scale.jpg" />
       </Wrap>
       <Wrap>
          <img src="/images/slider-scales.jpg" />
       </Wrap>
      

      
    </Carousel>
  )
}

export default ImgSlider
const Carousel = styled(Slider)`
  .slick-list{
      overflow:visible;
  }
 li.slick-active button::before{
     color:white;
 }
 button{
     z-index:1;
 }
   

`
const Wrap = styled.div`
cursor:pointer;
     img{
         width:100%;
         height:100%;
         border-radius:3px;
         border:4px solid transparent;
        
         
         box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        &:hover{
            border:4px solid rgba(249,249,249,0.8);
        }
     
     
        }

`