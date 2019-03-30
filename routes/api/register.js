const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const User = require('../../models/user');

router.post('/', (req, res) => {
  const { name, email, password, role } = req.body;

  // Simple Validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const newUser = new User({
    name,
    email,
    password,
    role
  })

  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User Already exists' })

      // Create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
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
    })

})

module.exports = router;