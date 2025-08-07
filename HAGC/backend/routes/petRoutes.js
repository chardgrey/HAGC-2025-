const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { authenticate, requireAdmin } = require('../middlewares/auth');

// Public route - anyone can view pets
router.get('/', petController.getAllPets);
router.get('/:id', petController.getPetById);

// Protected routes - only admin can manage pets
router.post('/', authenticate, requireAdmin, petController.createPet);
router.put('/:id', authenticate, requireAdmin, petController.updatePet);
router.delete('/:id', authenticate, requireAdmin, petController.deletePet);

module.exports = router;