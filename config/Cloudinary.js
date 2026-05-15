import { v2 as Cloudinary } from 'cloudinary';
import dotenv from "dotenv"
dotenv.config();


Cloudinary.config(
    {
        cloud_name: `taniii`,
        api_key: `781979286563813`,
        api_secret: `FnKb1sMhV_qnc3YmgWHSJA_R2z8`
    })

export default Cloudinary;