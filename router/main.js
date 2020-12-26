const router = require("express").Router()
const controller = require("../controller/main")

router.get("/",controller.getFrontPage);
router.post("/",controller.postFrontPage);
router.post("/data",controller.postData);

module.exports = router;