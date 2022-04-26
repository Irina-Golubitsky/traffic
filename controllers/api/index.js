const router = require('express').Router();

const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');
const scoreRoutes=require('./score-routes');
const hdallRoutes=require('./hdall-routes');

router.use('/users',userRoutes);
router.use('/questions',questionRoutes);
router.use('/scores', scoreRoutes);
router.use('/hdall', hdallRoutes);

module.exports = router;