const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Authentication middleware
exports.authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid token. User not found.' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

// Authorization middleware for admin only
exports.requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
  next();
};

// Authorization middleware for rescue officers
exports.requireRescueOfficer = (req, res, next) => {
  if (req.user.role !== 'rescue_officer' && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Rescue officer role required.' });
  }
  next();
};

// Middleware to check if user owns the resource or is admin
exports.requireOwnershipOrAdmin = (req, res, next) => {
  const resourceUserId = req.params.userId || req.body.userId;
  
  if (req.user._id.toString() !== resourceUserId && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. You can only access your own resources.' });
  }
  next();
};
