const express = require("express")
const router = express.Router()

const { createCtrl, deleteOne, readCtrl, updateOne } = require("./../controllers/index")

const { validateBody, validateUpdateBody } = require("./../middlewares/index")



// Routing -> URL -> Method -> Controller

router.post("/create", validateBody, createCtrl);

router.get("/read", readCtrl);

router.put("/update/:id", validateUpdateBody, updateOne)

router.delete("/delete/:id", deleteOne)

module.exports = router
