import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscriptions, getAllSubscriptions, getSubscriptionById } from '../controllers/subscription.controller.js';

// Subscription routes
const subscriptionRouter = Router();

// GET all subscriptions
subscriptionRouter.get('/', authorize, getAllSubscriptions);

// GET subscription details by ID
subscriptionRouter.get('/:id', authorize, getSubscriptionById);

// Create a new subscription
subscriptionRouter.post('/', authorize, createSubscription);

// Update an existing subscription
subscriptionRouter.put('/:id', authorize, (req, res) => res.send({ title: 'UPDATE subscription' }));

// Delete a subscription
subscriptionRouter.delete('/:id', authorize, (req, res) => res.send({ title: 'DELETE subscription' }));

// Get subscriptions for a specific user
subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

// Cancel a subscription
subscriptionRouter.put('/:id/cancel', authorize, (req, res) => res.send({ title: 'CANCEL subscription' }));

// Get upcoming renewals
subscriptionRouter.get('/upcoming-renewals', authorize, (req, res) => res.send({ title: 'GET upcoming renewals' }));

export default subscriptionRouter;