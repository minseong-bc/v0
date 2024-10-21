'use client';
import { Button } from "@/components/ui/button"

const btnText = "가입하기"
export function SubmitBtn() {
    return <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-300">{btnText}</Button>
}