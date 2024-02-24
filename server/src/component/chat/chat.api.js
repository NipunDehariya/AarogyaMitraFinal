const { Router } = require("express");
// import { verifyToken } from "../utils/token-manager.js";
// import { chatCompletionValidator, validate } from "../utils/validators.js";
// const {
//   deleteChats,
//   generateChatCompletion,
//   sendChatsToUser,
// } = require( "./chat.service.js");
const {
 generateChat,
} = require( "./chat.servicee.js");

//Protected API
// const chatRoutes = Router();
// chatRoutes.post(
//   "/new",
//   validate(chatCompletionValidator),
//   verifyToken,
//   generateChatCompletion
// );
// chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
// chatRoutes.delete("/delete", verifyToken, deleteChats);

const chatRoutes = Router();
// chatRoutes.post(
//   "/new",
//   generateChatCompletion
// );
// chatRoutes.get("/all-chats", sendChatsToUser);
// chatRoutes.delete("/delete", deleteChats);

chatRoutes.post("/gnew", generateChat);

exports.chatRouter = chatRoutes  ;