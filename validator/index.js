exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email not found")
    .isLength({
      min: 4,
      max: 32,
    });

  req.check("password", "password required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contains at least 6 character");
  // .matches(/d/)
  // .withMessage("Password Must contain a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  //to proceed further
  next();
};
