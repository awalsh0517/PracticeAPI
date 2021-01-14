const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { registerValidation } = require('../validation')

router.post('/register', async (req, res) => {
  // validate data before make user
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  //Check if user is in database
  const emailExists = await User.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).send('Email aready exists')

  //Hash the Password
  const salt = await bcrypt.gentSalt(10)
  const hashedPassword = await bcrypt.hash(rew.body.password, salt)


  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err)
  }
})

// router.post('/login')

module.exports = router