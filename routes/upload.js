import express from "express";
import uploadMulter from "../controllers/upload.js";

const router = express.Router();


router.post('/', uploadMulter.single('file'), (req, res) => {
    if (req.file) {
        res.json({message: 'Arxiu pujat correctament'});
    } else {
        res.json({message: 'Error al pujar l\'arxiu'});
    }

});

export default router;