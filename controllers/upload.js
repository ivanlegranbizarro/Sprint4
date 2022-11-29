import multer from "multer";
import path from "path";

const __dirname = path.resolve();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const pathStorage = `${__dirname}/uploads`;
        cb(null, pathStorage);
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop();
            const fileName = `${file.fieldname}-${Date.now()}.${extension}`;
            cb(null, fileName);
    }
});


const uploadMulter = multer({storage});


export default uploadMulter;