// IMPORT THE EXPRESS ROUTER HERE
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

//MIDDLEWARE FOR ROUTES
router.use('/api', apiRoutes);
router.use((req, res) => {
    return res.status(404).send('Not found');

});

//EXPORT THE ROUTER HERE
module.exports = router;
