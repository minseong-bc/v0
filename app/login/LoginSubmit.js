import React from "react";
// import executeQuery from "../_lib/db";

export async function LoginSubmit (form) {
    form.preventDefault();
    const studentId = form.currentTarget.studentId.value;
    const name = form.currentTarget.name.value;
    console.log(studentId, name);

    // let queryString = `INSERT INTO stu(sid) where sid = '${studentId}' and password = '${password}';`;  
    // const data = await executeQuery(queryString);
  };