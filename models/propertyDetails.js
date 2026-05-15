import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const PropertyDetails= sequelize.define("PropertyDetails",
    {
        totalArea:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },
        totalUnit:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        numberOfTower:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        numberOfFloor:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        startingPrice:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },
        buildYear:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        builderName:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:
        {
             type:DataTypes.STRING,
            allowNull:false,
        },
        amenities:
        {
           type:DataTypes.STRING,
           allowNull:false,
        },
        propertyId:
        {
             type:DataTypes.INTEGER,
            allowNull:false,
        },
        userId:
        {
             type:DataTypes.INTEGER,
            allowNull:false,
        }

    },{
        timestamps:true,
    });


    export default PropertyDetails;