'use client';
import { useState } from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion } from 'framer-motion';
import { Label } from "@/components/ui/label"
import { LoginSubmit } from "./LoginSubmit"
import { IdInput } from "./idInput"
import { NameInput } from "./NameInput"
import { SubmitBtn } from './SubmitBtn'

export default async function LoginPage() {
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
        <form onSubmit={LoginSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="studentId" className="text-gray-700">학번</Label>
            <IdInput />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">이름</Label>
            < NameInput />
          </div>
          {showError && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                학번이 올바르지 않습니다.
              </AlertDescription>
            </Alert>
          )}
          < SubmitBtn />
        </form>
      </motion.div>
    </div>
  )
}