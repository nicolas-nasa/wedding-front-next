'use client'
import styled from 'styled-components'
import HeroMobile from '../../public/hero-mobile.jpg'
import Hero from '../../public/hero.jpg'

export const HeroStyled = styled.div`
   display: flex;
   justify-content: start;
   align-items: end;
   height: 100vh;
   width: 100vw;
   background-image: url(${Hero.src});
   background-position: center;
   background-size: 100vw;
   background-repeat: no-repeat;
   @media (max-width: 930px) {
      background-image: url(${HeroMobile.src});
      background-size: cover;
      justify-content: center;
   }
`
