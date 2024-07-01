const User = require('../models/user.js')
const crypto = require("crypto");
const md5 = require("md5");

module.exports.register = async (req, res) => {
    try {
        const { userName, phoneNumber, email, password } = req.body;

        if (await User.findOne({ email: email })) {
            res.status(409).json({ message: "Email already exists" });
            return;
        }

        const user = new User({
            username: userName,
            phone: phoneNumber,
            email: email,
            password: md5(password),
            token: crypto.randomBytes(64).toString("hex"),
        });

        await user.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email: email,
            password: md5(password),
        });

        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        res.cookie("token", user.token);
        res.status(200).json({ message: "Login successful", username: user.username });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}