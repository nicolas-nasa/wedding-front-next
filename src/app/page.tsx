import Cowntdown from '@/components/molecules/contador'
import Header from '@/components/molecules/header'
import { HeroStyled } from './styled'

export default function Home() {
   return (
      <>
         <Header />
         <HeroStyled>
            <Cowntdown></Cowntdown>
         </HeroStyled>
         {/* <Footer /> */}
      </>
   )
}
