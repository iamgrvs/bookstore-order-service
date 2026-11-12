const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.get('/orders/user/:userId', orderController.getOrdersByUserId);
router.put('/orders/:id/status', orderController.updateOrderStatus);

module.exports = router;
