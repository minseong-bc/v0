'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SignUpSubmit } from './Signup'
import { IdInput } from '../login/idInput'
import { NameInput } from '../login/NameInput'
import { SubmitBtn } from '../login/SubmitBtn'
import IdCheck from './idCheck'

export default function SignUpPage() {
  const [idChecked, setIdChecked] = useState(false)
  const [idAvailable, setIdAvailable] = useState<'success' | 'destructive' | null>(null);
  const [showError, setShowError] = useState(false)

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
        <form onSubmit={SignUpSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-gray-700">학번</Label>
            <div className="flex space-x-2">
            <IdInput />
              <IdCheck />
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
            < NameInput />
          </div>
          <SubmitBtn />
        </form>
      </motion.div>
    </div>
  )
}