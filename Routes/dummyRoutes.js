const express= require('express')
const router= express.Router();

const {dummyRoutes} = require('../Controller/dummyController')
 router.get('/dummyroute',dummyRoutes);

module.exports=router;