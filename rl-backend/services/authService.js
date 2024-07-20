import usersDAO from '../DAOs/usersDAO.js'

const login = async (data) => {

    //Find user in database
    const userId = await usersDAO.findUserIdByEmail(data.email);

    //Guard: no user exists with supplied email address
    if (userId === null) return false

    //Guard: Password incorrect
    if (!comparePassword(userId, data.password)) return false;

    const name = await usersDAO.getUserNameById(userId);

    //Guard: database error.
    if (typeof (name) !== "object") return false;

    return name;
}

const comparePassword = async (userId, password) => {

    const retrievedPassword = await usersDAO.getPasswordByUserId(userId)

    if (password === retrievedPassword) return true;
    return false;
}

//ToDo: Prevent duplicate email registrations, aka only unique emails allowed.
const register = async (email, password, nameFirst, nameLast) => {

    //Guard: Email already exists in database
    if(usersDAO.findUserIdByEmail) return false;

    const userId = await usersDAO.addUser(email, password, nameFirst, nameLast)

    if (userId === undefined || userId === null) return false
    return userId;
}

export default { login, register };