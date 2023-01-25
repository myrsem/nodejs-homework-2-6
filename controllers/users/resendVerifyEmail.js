const {User} = require("../../models/users")

const {HttpError, sendEmail} = require("../../helpers")

const {BASE_URL} = process.env;

const resendVerifyEmail = async(req, res)=> {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user || user.verify) {
        throw HttpError(404)
    }

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click verify email</a>`
    };

    await sendEmail(verifyEmail);

    res.json({
        message: "Verify email resend"
    })
}

module.exports = resendVerifyEmail;