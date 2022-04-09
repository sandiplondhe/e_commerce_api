const router = require('express').Router();
const reviewController = require('../../controllers/reviewsController');
// const verifyToken = require('../../middleware/auth');

router.post('/:id', reviewController.addReview);

module.exports = router;
