import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
// router.route('/member-access').get(protect, getMemberDetails);
export default router