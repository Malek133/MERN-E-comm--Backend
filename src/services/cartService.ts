import { cartModel } from "../models/cartModel"

interface ICreateCart {
  userId:string
}

interface IActiveCart {
  userId:string
}

const creatCartForUser = async ({userId}:ICreateCart) =>{
  const cart = await cartModel.create({userId,totalAmount:0})
  await cart.save()
  return cart
}

export  const getActiveCart = async ({userId}:IActiveCart) =>{
  let cart = await cartModel.findOne({userId,status:"active"})

  if(!cart){
     cart = await creatCartForUser({userId})
  }
  return cart
 }

