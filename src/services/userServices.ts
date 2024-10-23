import { userModel } from "../models/userModels";
import bcrypt from 'bcrypt'

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
       return {data:'this Email is ALready Exist',statusCode:400}
    }
     
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser= new userModel({ firstName,lastName,email,password:hashedPassword})
    await newUser.save();
    return {data:newUser,statusCode:200}

}


export interface LoginParams{

    email:string;
    password:string
}

export const Login = async ({email,password}:LoginParams) =>{

    const userFind = await userModel.findOne({email})

    if(!userFind){
       return {data:'email password incorect',statusCode:400}
    }

    const passwordMatch = await bcrypt.compare(password,userFind.password)
    if (passwordMatch){
        return {data:userFind,statusCode:200}
        
    }
    return {data:'email password incorect',statusCode:400};

    
}