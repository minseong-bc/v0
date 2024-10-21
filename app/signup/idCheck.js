'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const checkStudentId = async () => {
    // try {
    //   fetch('/api/check-student-id', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ studentId })
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       const query = `SELECT sid FROM db_test.stu WHERE sid = '${studentId}'`;
    //       return executeQuery(query);
    //     })
    //     .then((result: any) => {
    //       if (result.length > 0) {
    //         setIdAvailable('success');
    //       } else {
    //         setIdAvailable('destructive');
    //       }
    //       setIdChecked(true);
    //     })
    //     .catch(error => {
    //       console.error('Error checking student ID:', error);
    //     });
    // } catch (error) {
    //   console.error('Error checking student ID:', error);
    // }
  }

export default function IdCheck() {
    const [idChecked, setIdChecked] = useState(false);
    return (
        <Button
            type="button"
            onClick={checkStudentId}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
            중복확인
        </Button>
    );
}