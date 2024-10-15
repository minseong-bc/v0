'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignupPage() {
  const [studentId, setStudentId] = useState('')
  const [name, setName] = useState('')
  const [idChecked, setIdChecked] = useState(false)
  const [idAvailable, setIdAvailable] = useState(false)
  const [showError, setShowError] = useState(false)

  const checkStudentId = async () => {
    try {
      const response = await fetch('/api/check-student-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId })
      })
      const data = await response.json()
      setIdChecked(true)
      setIdAvailable(data.available)
    } catch (error) {
      console.error('Error checking student ID:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!idChecked) {
      setShowError(true)
      return
    }
    // Form submission logic here
    console.log('Form submitted:', { studentId, name })
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        플래시톡
      </motion.div>
      <motion.div
        className="w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-gray-700">학번</Label>
            <div className="flex space-x-2">
              <Input
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="'-' 없이 숫자만 입력해주세요"
              />
              <Button
                type="button"
                onClick={checkStudentId}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                중복확인
              </Button>
            </div>
            {idChecked && (
              <Alert variant={idAvailable ? "success" : "destructive"} className="mt-2">
                <AlertDescription>
                  {idAvailable ? "사용할 수 있는 학번입니다." : "사용할 수 없는 학번입니다."}
                </AlertDescription>
              </Alert>
            )}
            {showError && !idChecked && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>
                  학번 중복확인을 해주십시오
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">성명</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-300">
            시작하기
          </Button>
        </form>
      </motion.div>
    </div>
  )
}