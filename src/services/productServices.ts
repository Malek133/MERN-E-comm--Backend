import { productModel } from "../models/productModel"


export const getAllProducts = async () =>{
    return await productModel.find()
}

export const seedInitialProduct = async() =>{
  const product = [
    {
     title:"product1",price:"1$",stock:1,
     image:"https://i.pinimg.com/enabled_lo/564x/5e/c2/49/5ec249fc3687dc9440a17f132a95ead6.jpg"
    },
    {
        title:"product2",price:"2$",stock:4,
        image:"https://i.pinimg.com/enabled_lo/564x/a4/0a/b3/a40ab367d6904a8c45a2a4776978e5fc.jpg",
       },
       {
        title:"product3",price:"3$",stock:9,
        image:"https://i.pinimg.com/736x/38/f7/d7/38f7d748ef73eaa393601ba827b00ebe.jpg"
       },
       {
        title:"product4",price:"4$",stock:7,
        image:"https://i.pinimg.com/736x/ba/9b/db/ba9bdbde6569efa808880e264d8fb61d.jpg"
       },
       {
        title:"product5",price:"5$",stock:3,
        image:"https://i.pinimg.com/736x/fa/97/7e/fa977e43d7c4c343fd56f9cf8cd2238a.jpg"
       },
  ]

  const existingProducts = await getAllProducts();

  if(existingProducts.length === 0){
    await productModel.insertMany(product)
  }
}