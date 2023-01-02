const express = require("express");

const ctrl = require("../../controllers/contacts")

const {ctrlWrapper} = require("../../helpers")

const {validateBody} = require("../../middlewares")

const schemas = require("../../models/contacts")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll))

router.get("/:id", ctrlWrapper(ctrl.getById))

router.post("/",  ctrlWrapper(ctrl.add))

router.put("/:id", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;
