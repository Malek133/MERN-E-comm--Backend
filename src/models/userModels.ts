import mongoose , {Document, Schema} from "mongoose";


export interface IUser extends Document{
   
    firstName:string;
    lastName:string;
    email:string;
    password:string
}

 const userSchema = new Schema<IUser>({
   
    firstName:{types:String,required:true},
    lastName:{types:String,required:true},
    email:{types:String,required:true},
    password:{types:String,required:true},
})

export const userModel = mongoose.model<IUser>('User',userSchema)