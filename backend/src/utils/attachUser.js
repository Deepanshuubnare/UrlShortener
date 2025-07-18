import { findUserById } from "../dao/user.dao.js"
import { verifyToken } from "./helper.js"

export const attachUser = async (req, res, next) => {
    if (req.method === 'OPTIONS') return next(); 
    const token = req.cookies.accessToken
    if(!token) return next()

    try {
        const decoded = verifyToken(token)
        const user = await findUserById(decoded)
        console.log(user);
        if(!user) return next()
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        next()
    }
}