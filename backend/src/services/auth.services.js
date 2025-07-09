import  jsonwebtoken  from "jsonwebtoken"
import User from "../models/user.model.js"
import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorhandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser=async(name,email,password)=>{
  const user=await findUserByEmail(email);
  if(user) throw new ConflictError("User Already exist!");
  const newUser= await createUser({name,email,password});
  const token=await signToken({id:newUser._id});
  return {token,user};
}
export const loginUser = async (email, password) => {
    const user = await findUserByEmail(email)
    if(!user) throw new Error("Invalid email or password")

    const isPasswordValid = await user.comparePassword(password)
    if(!isPasswordValid) throw new Error("Invalid email or password")
    const token = signToken({id: user._id})
    return {token,user}
}