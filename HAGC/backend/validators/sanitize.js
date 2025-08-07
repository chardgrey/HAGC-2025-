// Sanitization helpers for API responses

function sanitizeUser(user) {
  if (!user) return null;
  const { _id, name, email, role } = user;
  return { _id, name, email, role };
}

function sanitizeApplication(app) {
  if (!app) return null;
  const { _id, userId, petId, message, status, createdAt } = app;
  return { _id, userId, petId, message, status, createdAt };
}

function sanitizeRescueReport(report) {
  if (!report) return null;
  const { _id, reporterId, description, image, location, status, createdAt } = report;
  return { _id, reporterId, description, image, location, status, createdAt };
}

module.exports = {
  sanitizeUser,
  sanitizeApplication,
  sanitizeRescueReport
};
