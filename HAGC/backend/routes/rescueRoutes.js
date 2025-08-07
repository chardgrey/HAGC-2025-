const express = require('express');
const router = express.Router();
const rescueController = require('../controllers/rescueController');
const { authenticate, requireRescueOfficer, requireOwnershipOrAdmin } = require('../middlewares/auth');

// Routes
router.post('/', authenticate, rescueController.createReport); // Any authenticated user can create
router.get('/', authenticate, requireRescueOfficer, rescueController.getAllReports); // Only rescue officers/admin
router.get('/user/:userId', authenticate, requireOwnershipOrAdmin, rescueController.getReportsByUser); // Own reports or admin
router.put('/:id', authenticate, requireRescueOfficer, rescueController.updateReportStatus); // Only rescue officers/admin
router.delete('/:id', authenticate, requireRescueOfficer, rescueController.deleteReport); // Only rescue officers/admin

module.exports = router;