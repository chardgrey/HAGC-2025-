const { sanitizeApplication } = require('../validators/sanitize');
const AdoptionApplication = require('../models/application');
const { sendAdoptionNotification } = require('../utils/mailer');

// Create
exports.createApplication = async (req, res) => {
  try {
    const app = new AdoptionApplication(req.body);
    const saved = await app.save();

    // 📨 Send email to admin
    await sendAdoptionNotification(saved);

    res.status(201).json({ status: 'success', application: sanitizeApplication(saved) });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all (admin)
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await AdoptionApplication.find().populate('userId petId');
    res.json(apps.map(sanitizeApplication));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by user
exports.getApplicationsByUser = async (req, res) => {
  try {
    const apps = await AdoptionApplication.find({ userId: req.params.userId }).populate('petId');
    res.json(apps.map(sanitizeApplication));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update status
exports.updateStatus = async (req, res) => {
  try {
    const updated = await AdoptionApplication.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        reviewedAt: Date.now()
      },
      { new: true }
    );
    res.json(sanitizeApplication(updated));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteApplication = async (req, res) => {
  try {
    await AdoptionApplication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
