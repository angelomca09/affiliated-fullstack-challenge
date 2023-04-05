import Sequelize from "sequelize";
import db from "../repositories/db";

const Sale = db.define(
  "sales",
  {
    sale_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
    product: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    seller: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }
)

export default Sale