'use client';
import { Input } from "@/components/ui/input"
import { useState } from 'react'

export function IdInput() {
    const [studentId, setStudentId] = useState('')
    return <Input
        id="studentId"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="'-' 없이 숫자만 입력해주세요"
        required
    />  
}