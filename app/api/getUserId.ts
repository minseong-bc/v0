import { selectSQL } from "../_lib/db";

export const getUserId = () => {
    const query = 'SELECT * FROM stu;';

    return selectSQL(query);
}