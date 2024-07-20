import authService from '../services/authService.js'

const login = async (req, res) => {

    const result = await authService.login(req.body)

    if (result) res.send(result);
    else res.status(401).send(false);

}

const register = async (req, res) => {

    const { email, password, nameFirst, nameLast } = req.body

    const result = await authService.register(email, password, nameFirst, nameLast)

    if (!result) res.status(500).send();
    else res.json({ message: "Successful registration!" }).send()
}

export default { login, register }