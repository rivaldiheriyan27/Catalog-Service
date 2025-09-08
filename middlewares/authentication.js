// middlewares/authentication.js
"use strict";

const { verifyJwt } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw { name: "InvalidToken" };
    }

    console.log("ini datany ", authHeader);

    const token = authHeader.split(" ")[1];
    const payload = verifyJwt(token);

    const user = await User.findOne({ where: { UserId: payload.userId } });
    if (!user) throw { name: "InvalidToken" };

    req.user = {
      userId: user.UserId,
      role: user.Role,
      name: user.Name,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
