import { AStyle, MenuStyle, MobileBotoonMenu, MobileMenuStyle } from './styled';
type MenuProps = {
   active: () => void;
   isopen: boolean ;
}

export default function MobileMenu({ isopen, active }: MenuProps) {
   
   return (
      <MobileMenuStyle>
      <MobileBotoonMenu onClick={active}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eeeeee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{cursor: "pointer"}}>
         <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
            <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
         </path>
         <rect width="10" height="10" stroke="none">
            <animate dur="2s" id="reverse" attributeName="width" begin="click" />
         </rect>
         <rect width="10" height="10" stroke="none">
            <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
            <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
         </rect>
         </svg>
      </MobileBotoonMenu>
      <MenuStyle isopen={isopen}>
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
      </MobileMenuStyle>
   )
}
