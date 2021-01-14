const router = require('express').Router()
const User = require('../model/User')

// Validation
const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required()
})

router.post('/register', (req, res) => {

  // validate data before make user
  const validation = schema.validate(req.body)
  res.send(validation)

  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password
  // })
  // try {
  //   const savedUser = await user.save()
  //   res.send(savedUser)
  // } catch (err) {
  //   res.status(400).send(err)
  // }
})

// router.post('/login')

module.exports = router