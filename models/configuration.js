import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const Configuration = sequelize.define("Configuration",
    {
        configurationName:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalUnits:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        availableUnits:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        floorPlanUpload:
        {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        userId:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        propertyId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: true });


export default Configuration;