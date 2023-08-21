/**
 * main routing file
 */

const express = require('express');
const router = express.Router();

// api routes
router.get('/', (req,res)=> {
    return res.send("My API is working!!!!!");
    })
router.use('/api', require('./api/index'));


module.exports = router;
