'use client';
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function LoginBtn() {
    return <Link href="/login">
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
        시작하기
      </Button>
    </Link>
  }