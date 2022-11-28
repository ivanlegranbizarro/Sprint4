import express from "express";

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Hola des de l'upload")
})

export default router()