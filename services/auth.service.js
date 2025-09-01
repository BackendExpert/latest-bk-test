const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");
const { signJwt } = require("../utils/jwt");

const registerUser = async ({ username, email, password, roleName }) => {
    const role = await Role.findOne({ name: roleName });
    if (!role) throw new Error("Invalid role");

    const user = await User.create({
        username,
        email,
        password,
        role: role._id,
    });

    return {
        id: user._id,
        username: user.username,
        email: user.email,
        role: role.name,
    };
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email })
        .select("+password")
        .populate("role");

    if (!user) throw new Error("Invalid credentials");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    return signJwt({ id: user._id });
};

module.exports = { registerUser, loginUser };
