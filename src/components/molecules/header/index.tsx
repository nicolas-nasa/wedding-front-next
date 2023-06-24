"use client"
import Button from '@/components/atoms/button'
import Hero from 'public/hero.jpg'
import { useState } from 'react'
import MobileMenu from '../menu'
import { AStyle, HeaderStyle, MenuStyle } from './styled'

export default function Header() {
   const [isActiveMenu, setIsActiveMenu] = useState(false)
   const open = () => {setIsActiveMenu(!isActiveMenu)};
   return (
      <HeaderStyle>
         <MobileMenu active={open} isopen={isActiveMenu}></MobileMenu>
         <MenuStyle>
            <AStyle href={Hero.src} download="presentes">
               NOSSA HISTORIA
            </AStyle>
            <a
               target="_blank"
               href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Nicolas+%26+Thaina&location=Mans%C3%A3o+Arya&dates=20230709T133000Z%2F20230709T190000Z"
            ></a>
            <AStyle
               target="_blank"
               href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento+Nicolas+%26+Thaina&location=Mans%C3%A3o+Arya&dates=20230709T133000Z%2F20230709T190000Z"
            >
               MARCAR NA AGENDA
            </AStyle>
            <AStyle href="">PRESENTES</AStyle>
            <AStyle href="">ALBUM</AStyle>
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
