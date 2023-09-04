import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth";
import User from "../../../../../models/user";
import { connectToDB } from "../../../../../utils/database";



const handler = NextAuth({
    providers: [
       GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
       })
    ],
    callbacks: {
        async session({session}) {
           console.log(session)
           return session  
        },
        async signIn({user, profile}){
            
         try {
            await connectToDB()
            const sessionModelUser = await User.findOne({email: user.email})
            if(!sessionModelUser) {
               const createNewUser = await User.create({
                    userName: user.name,
                    email: user.email
                })
                if(!createNewUser){
                    console.log("user created")
                }
            }
            return true
         } catch (error) {
            return false
         }
        }
    }
})

export {handler as GET, handler as POST}