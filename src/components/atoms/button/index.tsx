import { ButtonStyle } from './styled'
type ButtonProps = {
   title: string
   link: string
}

export default function Button({ title, link }: ButtonProps) {
   return (
      <ButtonStyle href={link} target="_blank" rel="noopener noreferrer">
         {title}
      </ButtonStyle>
   )
}
