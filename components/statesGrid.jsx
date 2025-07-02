"use client"

import { useEffect, useState } from "react"

// Counter component outside
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}</span>
}

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center p-4 bg-slate-900/50 rounded-lg">
        <div className="text-2xl font-bold text-amber-400">
          <Counter end={3} />+
        </div>
        <div className="text-sm text-gray-300">Years Experience</div>
      </div>
      <div className="text-center p-4 bg-slate-900/50 rounded-lg">
        <div className="text-2xl font-bold text-amber-400">
          <Counter end={250} />+
        </div>
        <div className="text-sm text-gray-300">Affiliates Served</div>
      </div>
    </div>
  )
}
