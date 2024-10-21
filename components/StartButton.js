'use client';
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function StartButton() {
    return (
      <Link href="/start">
        <Button 
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          시작하기
        </Button>
      </Link>
    )
  }