const bcrypt = require('bcryptjs');
bcrypt.hash('yourpassword', 10, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});