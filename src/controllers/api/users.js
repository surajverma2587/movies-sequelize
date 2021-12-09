const { isValidUser } = require("../../helpers");

const { User } = require("../../models");

const createUser = async (req, res) => {
  try {
    if (!isValidUser(req.body)) {
      return res
        .status(400)
        .json({ success: false, error: "Creating user with invalid fields" });
    }

    const { email, password, firstName, lastName } = req.body;

    const newUser = {
      email,
      password,
      firstName,
      lastName,
    };

    await User.create(newUser);

    return res.json({ success: true, data: "Successfully created user" });
  } catch (err) {
    console.log(`[ERROR]: failed to create user - ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

module.exports = { createUser };
