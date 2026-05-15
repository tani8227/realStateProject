import express from "express";
import * as agentController from "../controllers/agent/agentController.js";
import checkAuthentication from "../middleWares/passport/checkAuthentication.js";
import multerUpload from "../middleWares/multer/multer.js";
const agentRouter = express.Router();

agentRouter.get("/dashboard", checkAuthentication, agentController.dashboard);
agentRouter.get("/properties", checkAuthentication, agentController.propertiesPage);
agentRouter.get("/basic-details-page", checkAuthentication, agentController.basicDetailsPage);
agentRouter.post("/add-basic-details", checkAuthentication, agentController.addBasicDeatils);
agentRouter.post("/add-property-details", checkAuthentication, agentController.addPropertyDetails);
agentRouter.post("/add-configuration", checkAuthentication, multerUpload.array("floorPlanUpload"), agentController.addConfiguration);
agentRouter.post("/add-upload-media", checkAuthentication, multerUpload.fields([{ name: "propertyImg", maxCount: 10 },{ name: "propertyVideo", maxCount: 5 }]), agentController.addUploadMedia);
agentRouter.post("/add-document", checkAuthentication, multerUpload.fields([{ name: "certificate", maxCount: 10 },{ name: "floorPlan", maxCount: 5 },{ name: "legalNoc", maxCount: 5 },{ name: "ownership", maxCount: 5 }]), agentController.addDocument);


export default agentRouter;