// IMPORT THE EXPRESS ROUTER HERE AND THE USER AND THOUGHT ROUTES
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


// MIDDLEWARE FOR ROUTES HERE
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

// EXPORT THE ROUTER HERE
module.exports = router;