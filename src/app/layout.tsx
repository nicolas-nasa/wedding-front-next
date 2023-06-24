import FavApple from 'public/favicon/apple-touch-icon.png'
import Fav16x16 from 'public/favicon/favicon-16x16.png'
import Fav32x32 from 'public/favicon/favicon-32x32.png'
import safari from 'public/favicon/safari-pinned-tab.svg'
import StyledComponentsRegistry from './registry'

export const metadata = {
   title: 'Wedding T&N',
   import: 'https://use.typekit.net/rld8osz.css',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <html>
            <head>
               <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href={FavApple.src}
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href={Fav32x32.src}
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href={Fav16x16.src}
               />
               <link rel="manifest" href="/site.webmanifest" />
               <link rel="mask-icon" href={safari.src} color="#5bbad5" />
               <link
                  rel="stylesheet"
                  href="https://use.typekit.net/rld8osz.css"
               />
               <link
                  rel="stylesheet"
                  href="https://use.typekit.net/rld8osz.css"
               />
            </head>
            <body>
               <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
         </html>
      </>
   )
}
