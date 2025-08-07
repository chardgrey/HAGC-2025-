const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { adoptionApplicationValidator } = require('../validators/adoptionValidator');
const { handleValidation } = require('../middlewares/validates');

// Apply with validation
router.post(
  '/',
  adoptionApplicationValidator,
  handleValidation,
  applicationController.createApplication
);


module.exports = router;
