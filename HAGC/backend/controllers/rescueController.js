const { sanitizeRescueReport } = require('../validators/sanitize');
const RescueReport = require('../models/rescueReport');

exports.createReport = async (req, res) => {
  try {
    const { reporterId, description, image, location } = req.body;
    const report = await RescueReport.create({ reporterId, description, image, location });
    res.status(201).json({ status: 'success', report: sanitizeRescueReport(report) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const reports = await RescueReport.find().populate('reporterId');
    res.json({ status: 'success', reports: reports.map(sanitizeRescueReport) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReportsByUser = async (req, res) => {
  try {
    const reports = await RescueReport.find({ reporterId: req.params.userId });
    res.json({ status: 'success', reports: reports.map(sanitizeRescueReport) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await RescueReport.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Report not found' });
    res.json({ status: 'success', report: sanitizeRescueReport(updated) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const deleted = await RescueReport.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Report not found' });
    res.json({ status: 'success', message: 'Report deleted' });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
};
