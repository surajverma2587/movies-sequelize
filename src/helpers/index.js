const isValidUser = ({ email, password, firstName, lastName }) =>
  email && password && firstName && lastName;

module.exports = { isValidUser };
