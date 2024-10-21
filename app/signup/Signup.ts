"use client";
import React from "react";
// import executeQuery from "../_lib/db";


export async function SignUpSubmit (form: React.FormEvent<HTMLFormElement>) {
    form.preventDefault();
    // Form submission logic here
    const studentId = form.currentTarget.studentId.value;
    const name = form.currentTarget.name.value;
    console.log(studentId, name);
  }