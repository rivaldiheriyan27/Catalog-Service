const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "Internal Server Error";
  let error = "This is Eror";
  let isStarted = null;

  const { name, minute } = err;
  msg = name;
  console.log(err, "          INI ERRORNYA");

  if (name === "SequelizeValidationError") {
    code = 200;
    msg = err.errors.map((error) => error.message);
  } else if (name === "Username or Password is invalid") {
    code = 200;
    msg = "Username or Password is invalid";
  } else if (name === "User has been registered") {
    code = 200;
    msg = "User has been registered";
  } else if (name === `Email User Not Found`) {
    code = 200;
    msg = `Email User Not Found`;
  } else if (name === "Current Password doesn't match") {
    code = 200;
    msg = "Current Password doesn't match";
  } else if (name === "Product Not Found") {
    code = 401;
    msg = "Product Not Found";
  } else if (name === "UserInactive") {
    code = 403;
    msg = "User is Inactive, please contact admin";
  } else if (name === "ProductNotFound") {
    code = 403;
    msg = "Product Not Found";
  } else if (name === "OutOfStock") {
    code = 403;
    msg = "Out Of Stock";
  }

  if (isStarted == null) {
    res.status(code).json({
      statusCode: code,
      data: {
        status: "Fail",
        Error: error,
        message: msg,
      },
    });
  } else {
    res.status(code).json({
      statusCode: code,
      data: {
        status: "Fail",
        Error: error,
        message: msg,
        isStarted: isStarted,
      },
    });
  }
};

module.exports = errorHandler;
