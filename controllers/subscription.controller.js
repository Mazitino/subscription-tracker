import { workflowClient } from '../config/upstash.js';
import Subscription from '../models/subscription.model.js';
import { SERVER_URL } from '../config/env.js';  

export const createSubscription = async (req, res, next) => {
  try {
    
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      retries: 0
    })

    res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: { subscription, workflowRunId }
    });

  } catch (error) {
    next(error);
  }
}

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Check if the user is the same as the one in the request
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error('You are not the owner of this account');
      error.statusCode = 401;
      throw error;
    } 
    // Fetch subscriptions for the user
    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      data: subscriptions
    });

  } catch (error) {
    next(error);
  }
}

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();

    res.status(200).json({
      success: true,
      data: subscriptions
    });

  } catch (error) {
    next(error);
  }
}

export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      const error = new Error('Subscription not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: subscription
    });

  } catch (error) {
    next(error);
  }
}