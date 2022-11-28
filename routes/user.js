import express from "express";

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send.json(
      {nom: 'Iván Legrán'},
      {edat: 37},
      {url: 'http://localhost:3000/user'}
  )
});

export default router;
