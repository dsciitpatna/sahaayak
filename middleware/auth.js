const jwt = require('jsonwebtoken');
const config = require('config');

function auth(role) {

  if (role) {
    return [
      (req, res, next) => {
        const token = req.header('x-auth-token');
        if (!token)
          return res.status(401).json({ msg: 'No token,Authentication denied' });

        try {
          const decoded = jwt.verify(token, config.get('jwtSecret'));
          req.user = decoded;
          if (role !== req.user.role) {
            return res.status(401).json({ msg: 'Invalid Role' });
          }
          next();
        } catch (e) {
          res.status(400).json({ msg: 'Invalid token' })
        }
      }
    ];
  }
}

module.exports = auth;