const express = require('express');
const userSchema = require("../models/campeones");

const router = express.Router();

//create campeones
router.post('/campeones', (req,res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//consultar campeones
router.get('/campeones',(req,res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
})

module.exports = router;