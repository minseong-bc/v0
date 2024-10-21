'use client';
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function SignupBtn(){
    return <Link href="/signup">
      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
        가입하기
      </Button>
    </Link>
  }