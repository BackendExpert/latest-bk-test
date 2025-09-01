const { registerUser, loginUser } = require("../services/auth.service");

const register = async (req, res, next) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const token = await loginUser(req.body);
        res.json({ token });
    } catch (err) {
        next(err);
    }
};

const getProfile = (req, res) => {
    res.json({ user: req.user });
};

module.exports = { register, login, getProfile };
