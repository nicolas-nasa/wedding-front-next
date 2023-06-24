'use client'
import styled from 'styled-components';

export const MobileMenuStyle = styled.div`
   display: none;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   @media (max-width: 700px) {
      display: flex;
   }
`
export const MobileBotoonMenu = styled.div`
  width: 40px;
  margin-left: 10px;
`
export const MenuStyle = styled.div<{isOpen: boolean}>`
   display: ${props => props.isOpen ? 'flex' : 'none'};
   height: 20vh;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   margin-left: 10vw;
   color: #b0cddf;
   font-family: 'basic-sans';
   font-size: 12px;
   font-weight: bold;
   text-align: center;
   animation: scale-up-hor-left 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) ${props => props.isOpen ? '' : 'reverse'} both;
   @keyframes scale-up-hor-left {
  0% {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: 0% 0%;
  }
  100% {
   opacity: 1;
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
}
`
export const AStyle = styled.a`
   font-family: 'basic-sans';
   font-size: 0.75rem;
   font-weight: bold;
   background-color: transparent;
   margin-bottom: 3vh;
   transition: 0.2s linear;
`

