const User = require("../models/user");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const user = new User(req.body);
  console.log(user);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB",
      });
    }
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const { number } = req.body;

  User.findOne({ number }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER  does not exists",
      });
    }

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send response to front end
    const { _id } = user;
    return res.json({ token, user: { _id } });
  });
};
