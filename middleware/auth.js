// const { ensureAuthenticated, getUser } = require('../helpers/auth-helpers')
const helpers = require("../helpers/auth-helpers.js");
const authenticated = (req, res, next) => {
  // if (req.isAuthenticated)
  if (helpers.ensureAuthenticated(req)) {
    return next();
  }
  res.redirect("/signin");
};
const authenticatedAdmin = (req, res, next) => {
  // if (req.isAuthenticated)
  if (helpers.ensureAuthenticated(req)) {
    if (helpers.getUser(req).isAdmin) return next();
    res.redirect("/");
  } else {
    res.redirect("/signin");
  }
};
module.exports = {
  authenticated,
  authenticatedAdmin,
};
