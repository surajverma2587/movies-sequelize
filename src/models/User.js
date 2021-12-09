const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const { hashPassword } = require("../hooks");

const schema = {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  modelName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
