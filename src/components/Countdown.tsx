import React, { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: Date
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="flex flex-col items-center bg-purple-800 p-4 rounded-lg">
        <span className="text-4xl md:text-6xl font-bold text-purple-200">{timeLeft[interval]}</span>
        <span className="text-sm md:text-base uppercase text-purple-300">{interval}</span>
      </div>
    )
  })

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-200">Countdown to Liftoff</h2>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

export default Countdown