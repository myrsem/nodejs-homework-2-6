const express = require("express");

const ctrl = require("../../controllers/users")

const {ctrlWrapper} = require("../../helpers")

const {validateBody, authenticate} = require("../../middlewares")

const {schemas} = require("../../models/users")

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.get("/current", authenticate, ctrlWrapper(ctrl.current))

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))

module.exports = router;