import db from "../../models/index.js";

const BasicDetails = db.BasicDetails;
const PropertyDetails = db.PropertyDetails;
const Configuration = db.Configuration;
const UploadMedia = db.UploadMedia;
const Document = db.Document;


export const dashboard = (req, res) => {
    return res.render("agent/dashboard", {
        layout: false,
        page: "home",
        active: "dashboard"
    });
}

export const propertiesPage = (req, res) => {

    res.render("agent/dashboard", {
        layout: false,
        page: "properties",
        active: "properties"
    });

}


export const basicDetailsPage = (req, res) => {

    return res.render("agent/dashboard", {
        layout: false,
        page: "basicDetails",
        active: "properties"
    });
}





export const addBasicDeatils = async (req, res) => {
    try {
        const { propertyName, propertyType, listtingPurpose, listtingCategory, propertyStatus, city, state, country, area, pinCode, address } = req.body;
        const basicDetails = await BasicDetails.create(
            {
                propertyName,
                propertyType,
                listtingPurpose,
                listtingCategory,
                propertyStatus,
                city,
                state,
                country,
                area,
                pinCode,
                address,
                userId: req?.user?.id
            });
        if (basicDetails) {
            console.log(basicDetails)
            return res.render("agent/dashboard", {
                layout: false,
                page: "propertyDetails",
                active: "properties",
                basicDetails: basicDetails
            });
        }
    } catch (error) {
        console.log("error in add property", error);
    }
}


export const addPropertyDetails = async (req, res) => {
    try {
        const { pid } = req.query;
        const { totalArea, totalUnit, numberOfTower, numberOfFloor, startingPrice, buildYear, builderName, description, amenities } = req.body;
        const propertyDetails = await PropertyDetails.create(
            {
                totalArea,
                totalUnit,
                numberOfTower,
                numberOfFloor,
                startingPrice,
                buildYear,
                builderName,
                description,
                amenities,
                userId: req.user?.id,
                propertyId: pid,
            })

        if (propertyDetails) {
            return res.render("agent/dashboard", {
                layout: false,
                page: "configuration",
                active: "properties",
                propertyDetails: propertyDetails,
                pid: pid,
            });
        }

    } catch (error) {
        console.log("error in adding property details", error);
    }
}

export const addConfiguration = async (req, res) => {
    try {

        const { pid } = req.query;

        const {
            configurationName,
            area,
            totalUnits,
            availableUnits,
            price
        } = req.body;
        // console.log(req.files);

        const configuration = await Configuration.create({
            configurationName,
            area,
            totalUnits,
            availableUnits,
            price,
            floorPlanUpload: req.files,
            userId: req.user.id,
            propertyId: pid,
        });

        console.log(configuration);

        return res.render("agent/dashboard", {
            layout: false,
            page: "uploadMedia",
            active: "properties",
            pid: pid,
        });

    } catch (error) {

        console.log("error in adding configuration", error);

    }
};


export const addUploadMedia = async (req, res) => {
    try {

        const { pid } = req.query;


        console.log(req.files);

        const upload = await UploadMedia.create({
            propertyImg: req.files.propertyImg,
            propertyVideo: req.files.propertyVideo,
            userId: req.user.id,
            propertyId: pid,
        });


        return res.render("agent/dashboard", {
            layout: false,
            page: "addDocument",
            active: "properties",
            pid: pid,
        });

    } catch (error) {

        console.log("error in adding configuration", error);

    }
};


export const addDocument = async (req, res) => {
    try {
        const { pid } = req.query;
        console.log(req.files);

        const dicument = await Document.create(
            {
                certificate: req.files.certificate,
                floorPlan: req.files.floorPlan,
                legalNoc: req.files.legalNoc,
                ownership: req.files.ownership,
                userId: req.user.id,
                propertyId: pid,
            })

        const basicDetails = await BasicDetails.findOne({
            where: {
                userId: req.user.id,
            }

        });
        const propertyDetails = await PropertyDetails.findOne({
            where: {
                propertyId: pid,
            }
        });
        const configuration = await Configuration.findOne({
            where: {
                propertyId: pid,
            }
        });
        const uploadMedia = await UploadMedia.findOne({
            where: {
                propertyId: pid,
            }
        });
        const document = await Document.findOne({
            where: {
                propertyId: pid,
            }
        });

        return res.render("agent/dashboard", {
            layout: false,
            page: "review",
            active: "properties",
            pid: pid,
            basicDetails:basicDetails,
            propertyDetails:propertyDetails,
            configuration:configuration,
            uploadMedia:uploadMedia,
            document:document,
        });
    } catch (error) {
        console.log("error in adding the document", error);
    }
}

export const Review = () => {
    try {
        return res.render("agent/dashboard", {
            layout: false,
            page: "success",
            active: "properties",
            pid: pid,
        });
    } catch (error) {
        console.log("error in adding in review", error);
    }
}


