const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();


router.get('/', authController.isLogginIn, bookingController.createBookingCheckout, viewController.getOverview);
router.get('/tour/:slug', authController.isLogginIn, viewController.getTour);
router.get('/login', authController.isLogginIn, viewController.getLoginForm);
router.get('/me',  authController.protect, viewController.getAccount);
router.get('/my-tours',  authController.protect, viewController.getMyTours);

router.post('/submit-user-data', authController.protect,  viewController.updateUserData);

module.exports = router;
