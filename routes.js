const {
  eceMockSendMessage,
  helloWorld,
  eceMockReply,
} = require("./controller");

const router = require("express").Router();

router.post("/eceMock", eceMockSendMessage);
router.post("/eceMockReply", eceMockReply);

router.get("/", helloWorld);

module.exports = router;
