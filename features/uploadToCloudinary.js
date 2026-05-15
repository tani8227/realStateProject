import cloudinary from "../config/cloudinary.js";
import path from "path";
import fs from "fs";

export const uploadImg = async (filePath) => {
    try {

        const absolutePath = path.resolve(filePath);

        console.log("Uploading file:", absolutePath);

        if (!fs.existsSync(absolutePath)) {
            throw new Error("File does not exist");
        }

        const result = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto",
        });

        return result.secure_url;

    } catch (error) {

        console.log("Cloudinary Error:", error);

        throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
};