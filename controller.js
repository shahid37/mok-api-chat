const axios = require("axios");



module.exports.eceMockSendMessage = async (req, res, next) => {
  try {
    console.log(".....", req.body);
    const { conversationId, message } = req.body;
    const response = { conversationId, message };
    res.status(200).json(response);
    // return res.json(req.body, "successfully");
  } catch (error) {
    next(error);
  }
};

//post eceMockReply(body:{reply,conversationId})

module.exports.eceMockReply = async (req, res, next) => {
  try {
    const { conversationId, reply } = req.body;
    const data = await axios.post("http://localhost:3000/api/v1/ece-events-webhook", {
      conversationId,
      reply,
    });
    return res.json(data.data);
  } catch (error) {}
};

module.exports.helloWorld = async (req, res, next) => {
  try {
    console.log("Hello World");
    return res.json("Hello World");
  } catch (error) {
    next(error);
  }
};
