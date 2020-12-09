// Importing express
const express = require('express');

// Importing userRouter
const userRouter = require('./userRouter');

// Initializing router
const router = express.Router();

// Using userRouter for /user
router.use('/user', userRouter);

module.exports = router;
