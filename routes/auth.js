import express from 'express'
import { getByToken, login, register } from '../controllers/auth.js'
import verifyToken from '../middlewares/verifyToken.js'
const router = express.Router()

// Register user
router.post('/register',register)

// Register user
router.post('/login',login)

// Register user
router.get('/me',verifyToken,getByToken)

export default router;

