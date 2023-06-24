'use client'
import styled from 'styled-components'

export const HeaderStyle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: absolute;
   width: 100vw;
   background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
   padding: 10px;
   @media (max-width: 700px) {
      align-items: flex-start;
      background: transparent;
   }
`

export const MenuStyle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   @media (max-width: 700px) {
      display: none;
   }
`
export const AStyle = styled.a`
   margin-left: 40px;
   font-family: 'basic-sans';
   font-size: 0.75rem;
   font-weight: bold;
   background-color: transparent;
   transition: 0.2s linear;
   &:hover {
      color: #b0cddf;  
   }
`
