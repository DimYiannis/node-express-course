const CustomError = require("../errors");
const { istokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError("authentication invalid");
  }

  try {
    const { name, userId, role } = istokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("authentication invalid");
  }
};

const authorizePermissions = (req, res, next) => {
  if(req.user.role !== 'admin') {
    throw new CustomError.UnauthorizedError('Unauthorized to access this route')
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions
};
