import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const UploadMedia = sequelize.define("UploadMedia",
    {
        propertyImg:
        {
            type: DataTypes.JSON,
            allowNull: false,
             defaultValue: [],
        },
        propertyVideo:
        {
             type: DataTypes.JSON,
            allowNull: false,
             defaultValue: [],
        },
        userId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        propertyId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    }, { timestamps: true });

export default UploadMedia;