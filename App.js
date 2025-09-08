"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const os = require("os");
const path = require("path");
const router = require("./router");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(cors());

// Middleware global
app.use(function (req, res, next) {
  res.set("Access-Control-Expose-Headers", "X-Served-By");
  res.set("X-Served-By", os.hostname);
  next();
});

app.use(express.json({ limit: "1024mb" }));
app.use(express.urlencoded({ limit: "1024mb", extended: true }));

// Static files
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order & Product API",
      version: "1.0.0",
      description: "API documentation for order & product management",
    },
    servers: [
      {
        url: "http://localhost:3001", // ganti sesuai environment kamu
      },
    ],
  },
  apis: ["./router/*.js"], // Path ke file router kamu
};

const specs = swaggerJsdoc(options);

// Middleware swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// Router
app.use("/", router);

module.exports = app;
