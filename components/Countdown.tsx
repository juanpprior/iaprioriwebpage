'use client'

import { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <div className="text-center">
        <div className="bg-prioria-green text-prioria-dark text-2xl md:text-4xl font-bold rounded-lg px-4 py-2 min-w-[60px] md:min-w-[80px]">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-prioria-gray-100 mt-2">Días</div>
      </div>
      
      <div className="text-center">
        <div className="bg-prioria-green text-prioria-dark text-2xl md:text-4xl font-bold rounded-lg px-4 py-2 min-w-[60px] md:min-w-[80px]">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-prioria-gray-100 mt-2">Horas</div>
      </div>
      
      <div className="text-center">
        <div className="bg-prioria-green text-prioria-dark text-2xl md:text-4xl font-bold rounded-lg px-4 py-2 min-w-[60px] md:min-w-[80px]">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-prioria-gray-100 mt-2">Minutos</div>
      </div>
      
      <div className="text-center">
        <div className="bg-prioria-green text-prioria-dark text-2xl md:text-4xl font-bold rounded-lg px-4 py-2 min-w-[60px] md:min-w-[80px]">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-prioria-gray-100 mt-2">Segundos</div>
      </div>
    </div>
  )
}
