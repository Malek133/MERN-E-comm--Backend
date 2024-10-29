import express from 'express'
import { getActiveCart } from '../services/cartService';
import validateJWT from '../midellwears/validateJWT';
import { ExtendRequest } from '../types/ExtendRequest';




const router = express.Router();

router.get('/', validateJWT ,async(req: ExtendRequest,res) =>{
  const userId = req.user._id
 const cart = await getActiveCart({userId})
 res.status(200).send(cart)
})

export default router