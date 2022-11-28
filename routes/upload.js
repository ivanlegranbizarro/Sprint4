import express from "express";
import uploadMulter from "../controllers/upload.js";

const router = express.Router();


router.post('/', uploadMulter.single('file'), (req, res) => {
    if (req.file) {
        res.json({message: 'File uploaded successfully'});
    } else {
        res.json({message: 'File not uploaded'});
    }

});

export default router;