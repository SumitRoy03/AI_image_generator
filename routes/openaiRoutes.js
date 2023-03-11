const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateImage);
router.get('/generateimage', (req,res)=>{
    res.status(200).json({
        success:'ok'
    })
});

module.exports = router;
