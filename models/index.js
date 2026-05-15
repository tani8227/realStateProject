import { sequelize } from "../config/db.js";
import User from "./user.js";
import BasicDetails from "./basicDetails.js";
import PropertyDetails from "./propertyDetails.js";
import Configuration from "./configuration.js";
import Document from "./document.js";
import UploadMedia from "./uploadMedia.js"


const db = {};

db.sequelize = sequelize;
db.User = User;
db.BasicDetails=BasicDetails;
db.Configuration=Configuration;
db.PropertyDetails=PropertyDetails;
db.UploadMedia=UploadMedia;
db.Document=Document;


db.User.hasMany(db.BasicDetails, {foreignKey:"userId"});
db.BasicDetails.hasOne(db.PropertyDetails, {foreignKey:"propertyId"});
db.BasicDetails.hasOne(db.Configuration, {foreignKey:"propertyId"});
db.BasicDetails.hasOne(db.Document, {foreignKey:"propertyId"});
db.BasicDetails.hasOne(db.UploadMedia, {foreignKey:"propertyId"});

db.sequelize.sync().then(() => {
    console.log("re-sync");
});

export default db;

