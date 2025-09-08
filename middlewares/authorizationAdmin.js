const authorizationAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      throw {
        name: "Forbidden",
        message: "Only Admin can access this resource",
      };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authorizationAdmin };
