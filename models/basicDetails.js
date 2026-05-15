import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


const BasicDetails = sequelize.define("BasicDetails",
    {
        propertyName:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        propertyType:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        listtingPurpose:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        listtingCategory:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        propertyStatus:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pinCode:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
    timestamps: true
});

export default BasicDetails;