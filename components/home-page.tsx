'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4">
      <div className="text-center">
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showThirdPart ? 1 : 0, y: showThirdPart ? 0 : -20 }}
          transition={{ duration: 1.5 }}
        >
          플래시톡
        </motion.div>
        <div className="text-3xl md:text-5xl font-bold text-white mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: showFirstPart ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            세상에서 가장
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: showSecondPart ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            간단한 대화
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
          transition={{ duration: 1 }}
        >
          <Link href="/start">
            <Button 
              className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-full text-xl font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              시작하기
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}