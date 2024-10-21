'use client';
import { Input } from "@/components/ui/input"
import { useState } from 'react'

export function NameInput() {
    const [name, setName] = useState('')
    return <Input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
}