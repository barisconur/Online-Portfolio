const express = require('express');
const adminController = require('../controller/adminController');

const router = express.Router();

router  
  .route('/')
  .post(adminController.login)
  
module.exports = router;
