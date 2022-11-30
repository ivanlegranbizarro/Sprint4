import express from "express";
import basicAuth from "../middlewares/timeAuth.js";

const router = express.Router();

/*
Crea un endpoint /time que rebi per POST com a paràmetre un JSON amb el nom d'usuari/ària i retorni un objecte JSON que contingui l'hora i data actual. Inclogui un middleware que afegeixi la capçalera Cache-control: no-cache. Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, sigui mitjançant Express o mitjançant un altre middleware.
*/

router.post("/", basicAuth, (req, res) => { // TODO revisar si es pot deixar trencat per veure la validació del middleware
    const {username} = req.body;
    const date = new Date();

    res.header("Cache-control", "no-cache");
    res.header("Access-Control-Allow-Origin", "*");
    res.json({username, date});
});

export default router;
