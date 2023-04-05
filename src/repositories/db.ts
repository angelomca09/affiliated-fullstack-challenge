import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://cukvikfj:BxXD7cvlvmCMm-PIOD4OQ2aEJD9PKvwl@ruby.db.elephantsql.com/cukvikfj",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;