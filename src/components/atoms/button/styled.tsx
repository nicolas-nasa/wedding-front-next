'use client'
import styled from 'styled-components'

export const ButtonStyle = styled.a`
   margin-right: 40px;
   border-radius: 10px;
   color: #b0cddf;
   font-family: 'basic-sans';
   font-size: 12px;
   font-weight: bold;
   padding: 15px 25px;
   text-align: center;
   background-color: #1e1e1e;
   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
   transition: 0.3s linear;
   &:hover {
      color: #ffffff;  
   }
   @media (max-width: 700px) {
      margin-right: 3vw;
   }

`
