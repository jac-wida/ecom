import express from 'express';
import {
  authUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userContoller.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUsers);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
