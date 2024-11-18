// app/_lib/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// SQL SELECT 공통 함수
export const selectSQL = async (sqlQuery :string) => {
    try {
        const [rows] = await pool.query(sqlQuery);
        return rows;
    } catch (err) {
        console.error(err);
    }
}

// export  {Component1 , Component2, Component3, ...} --> 이런식으로 여러개를 export할 수 있음