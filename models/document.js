import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Document = sequelize.define("Document",
    {
        certificate:
        {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        floorPlan:
        {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        legalNoc:
        {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        ownership:
        {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        propertyId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    }, { timestamps: true });

export default Document;