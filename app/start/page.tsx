import * as motion from "framer-motion/client"
import { SignupBtn } from './SignupBtn'
import { LoginBtn } from './LoginBtn'

export default async function StartPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        플래시톡
      </motion.div>
      <div className="w-full max-w-md space-y-8">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-2xl font-semibold text-gray-700">처음이라면?</span>
          <SignupBtn />
        </motion.div>
        <motion.div 
          className="flex items-center justify-between"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-2xl font-semibold text-gray-700">가입했다면?</span>
          <LoginBtn />
        </motion.div>
      </div>
    </div>
  )
}