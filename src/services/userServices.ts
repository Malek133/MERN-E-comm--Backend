import { userModel } from "../models/userModels";

export interface RegisterParams{
   
    firstName:string;
    lastName:string;
    email:string;
    password:string
}

export const Register = async ({ firstName,lastName,email,password}
    :RegisterParams) =>{

    const userFind = await userModel.findOne({email})

    if(userFind){
       return {Error:{message:'this Email is ALready Exist'}}
    }

    const newUser= new userModel({ firstName,lastName,email,password})
    await newUser.save()

}


export interface LoginParams{

    email:string;
    password:string
}

export const Login = async ({email,password}:LoginParams) =>{

    const userFind = await userModel.findOne({email})

    if(!userFind){
       return {Error:{message:'email password incorect'}}
    }

    const passwordMatch = password === userFind.password
    if (passwordMatch){
        return userFind
        
    }
    return {Error:{message:'email password incorect'}}
    
}