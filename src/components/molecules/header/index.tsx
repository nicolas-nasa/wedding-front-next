"use client"
import Button from '@/components/atoms/button';
import { useState } from 'react';
import MobileMenu from '../menu';
import { AStyle, HeaderStyle, MenuStyle } from './styled';

export default function Header() {
   const [isActiveMenu, setIsActiveMenu] = useState(false)
   const open = () => {setIsActiveMenu(!isActiveMenu)};
   return (
      <HeaderStyle>
         <MobileMenu active={open} isopen={isActiveMenu}></MobileMenu>
         <MenuStyle>
            <AStyle href="/Nos.pdf" download="breve_resumo">
               NOSSA HISTORIA
            </AStyle>
            <AStyle
               target="_blank"
               href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Nicolas+%26+Thaina&location=Mans%C3%A3o+Arya&dates=20230709T133000Z%2F20230709T190000Z"
            >
               MARCAR NA AGENDA
            </AStyle>
            <AStyle href="/presentes.pdf" download="presentes">PRESENTES</AStyle>
            <AStyle href="https://drive.google.com/drive/folders/1uyTzA_tQcFOTWbcQ5IEDc_36sdo-ONxk?usp=sharing">ALBUM</AStyle>
         </MenuStyle>
         <Button
            link={
               'https://wa.me/5511964464518?text=passando%20para%20confirmar%20minha%20presen%C3%A7a'
            }
            title={'CONFIRMAR PRESENÇA'}
         />
      </HeaderStyle>
   )
}
