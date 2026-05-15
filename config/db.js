import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize("real_state", "root", "root",
    {
        host: "localhost",
        dialect: "mysql",
        logging: false,
    });

const DB = () => {
    sequelize.authenticate()
        .then(() => {
            console.log("successfully connected to db");
        })
        .catch((err) => {
            console.log("error in conencting to db");
        })
}

export { sequelize, DB };