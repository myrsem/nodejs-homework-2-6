const bcrypt = require("bcrypt")
const gravatar = require("gravatar")
const {nanoid} = require("nanoid")

const {User} = require("../../models/users")

const {HttpError, sendEmail} = require("../../helpers")

const {BASE_URL} = process.env;

const register = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)
    const verificationCode = nanoid();
    
    const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationCode});
    
    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`
    };

    await sendEmail(verifyEmail);
    
    res.status(201).json({
        name: newUser.name,
        email: newUser.email,
    })
}

module.exports = register;