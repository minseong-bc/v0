'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import * as motion from "framer-motion/client"
import { StartButton } from './StartButton'


export default function HomePage() {
  const [showFirstPart, setShowFirstPart] = useState(false)
  const [showSecondPart, setShowSecondPart] = useState(false)
  const [showThirdPart, setShowThirdPart] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirstPart(true), 0)
    const timer2 = setTimeout(() => setShowSecondPart(true), 1500)
    const timer3 = setTimeout(() => setShowThirdPart(true), 3000)
    const timer4 = setTimeout(() => setShowButton(true), 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="text-center">
        <motion.div
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showThirdPart ? 1 : 0, y: showThirdPart ? 0 : -20 }}
          transition={{ duration: 1 }}
        >
          플래시톡
        </motion.div>
        <div className="text-3xl md:text-5xl font-bold mb-8">
          <motion.span
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: showFirstPart ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            세상에서 가장
          </motion.span>{" "}
          <motion.span
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSecondPart ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            간단한 대화
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <StartButton />
        </motion.div>
      </div>
    </div>
  )
}