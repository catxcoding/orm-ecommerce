// Import Sequelize class and database connection
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Extend Model class
class Category extends Model {}

// Initialize model with column definitions
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

// Export the model
module.exports = Category;
