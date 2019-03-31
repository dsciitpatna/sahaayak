const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/user');

router.post('/', (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({ email })
    .then(user => {
      if (!user) res.status(400).json({ msg: 'User does not exist' });

      if (user.role !== role) res.status(400).json({ msg: 'Invalid Role' });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user.id, role: user.role },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role
                }
              })
            }
          )

        })
    })

})

router.get('/user', auth("admin"), (req, res) => {
  User.findById(req.user.id, (err, users) => {
    if (err)
      throw err;
    else {
      res.json(users);
    }
  })
})

module.exports = router;