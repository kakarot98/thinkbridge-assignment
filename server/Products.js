const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Products extends Model {}

Products.init(
  {
    productName: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "products",
    timestamps: false
  }
);

module.exports = Products;
