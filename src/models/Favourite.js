const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

const schema = {
  imdbId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  underscored: false,
  modelName: "favourite",
};

class Favourite extends Model {}

Favourite.init(schema, options);

module.exports = Favourite;
