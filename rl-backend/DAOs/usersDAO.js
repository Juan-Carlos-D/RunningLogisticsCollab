import db from '../config/db.js'

const findUserIdByEmail = async (email) => {

    const queryStatement = 'SELECT id FROM users WHERE email=?';

    try {
        const [rows, _] = await db.execute(queryStatement, [email]);

        if (rows.length === 1) return rows[0].id;

        return false;
    }
    catch (err) {
        console.error("DAO error findUserIdByEmail():", err)
        return false;
    }
}

const getPasswordByUserId = async (userId) => {
    const queryStatement = 'SELECT password FROM users WHERE id=?';

    try {
        const [rows, _] = await db.execute(queryStatement, [userId]);

        if (rows.length === 1) return rows[0].password
        else return false
    }
    catch (err) {
        console.error("DAO Error getPasswordByUserId():", err)
    }
}

const addUser = async (email, password, nameFirst, nameLast) => {
    const queryStatement = 'INSERT INTO users (email, password, name_last, name_first) VALUES (?,?,?,?)';

    try {
        const resultSet = await db.execute(queryStatement, [email, password, nameLast, nameFirst]);

        if (resultSet[0].affectedRows === 1) {
            return resultSet[0].insertId;
        }
        else return null;

    }
    catch (err) {
        console.error("DAO Error addUser():", err)
    }
}

const getUserNameById = async (userId) => {
    const queryStatement = 'SELECT name_last, name_first FROM users WHERE id=?';

    try {
        const [rows, _] = await db.execute(queryStatement, [userId]);

        if (rows.length === 1) return rows[0];
        else return null;

    }
    catch (err) {
        console.error('DAO Error getUserNameById:', err)
        return false;
    }
}

export default { findUserIdByEmail, getPasswordByUserId, addUser, getUserNameById };