'use client'
import { useEffect, useState } from 'react'
import {
   CountDisplayStyle,
   CountdownStyle,
   DescribeTextStyle,
   TimeTextStyle,
} from './styled'

interface ICountdown {
   days: number
   hours: number
   minutes: number
   seconds: number
}

export default function Cowntdown() {
   const [countdown, setCountdown] = useState<ICountdown>()
   useEffect(() => {
      const interval = setInterval(() => {
         const target = new Date('07/09/2023 10:30:00')
         const now = new Date()
         const difference = target.getTime() - now.getTime()
         const timeRemaining = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
               (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
         }

         setCountdown(timeRemaining)

         if (target.getTime() < now.getTime()) {
            setCountdown({
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
            })
         }
      }, 1000)
      return () => clearInterval(interval)
   }, [])

   return (
      <CountdownStyle>
         <CountDisplayStyle>
            <TimeTextStyle>
               {countdown?.days && countdown?.days < 10
                  ? '0' + countdown?.days
                  : countdown?.days}
            </TimeTextStyle>
            <DescribeTextStyle>DIAS</DescribeTextStyle>
         </CountDisplayStyle>
         <CountDisplayStyle>
            <TimeTextStyle>
               {countdown?.hours && countdown?.hours < 10
                  ? '0' + countdown?.hours
                  : countdown?.hours}
            </TimeTextStyle>
            <DescribeTextStyle>HORAS</DescribeTextStyle>
         </CountDisplayStyle>
         <CountDisplayStyle>
            <TimeTextStyle>
               {countdown?.minutes && countdown?.minutes < 10
                  ? '0' + countdown?.minutes
                  : countdown?.minutes}
            </TimeTextStyle>
            <DescribeTextStyle>MINUTOS</DescribeTextStyle>
         </CountDisplayStyle>
         <CountDisplayStyle>
            <TimeTextStyle>
               {countdown?.seconds && countdown?.seconds < 10
                  ? '0' + countdown?.seconds
                  : countdown?.seconds}
            </TimeTextStyle>
            <DescribeTextStyle>SEGUNDOS</DescribeTextStyle>
         </CountDisplayStyle>
      </CountdownStyle>
   )
}
