const express = require("express")
const router = express.Router()

const { signupCtrl, loginCtrl, deleteOne, readCtrl, updateOne } = require("./../controllers/index")

const { validateBody, validateUpdateBody, validateLoginBody } = require("./../middlewares/index")



// Routing -> URL -> Method -> Controller

// router.post("/create", validateBody, createCtrl);

// router.get("/read", readCtrl);

// router.put("/update/:id", validateUpdateBody, updateOne)

// router.delete("/delete/:id", deleteOne)

router.post("/signup", validateBody, signupCtrl)
router.post("/login", validateLoginBody, loginCtrl)

module.exports = router
