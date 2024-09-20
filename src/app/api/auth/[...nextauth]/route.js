import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require('bcrypt');
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    return null;
                }

                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({ email });
                if (!currentUser) {
                    return null;
                }

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null;
                }

                return currentUser;
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })

    ],
    callbacks: {

    },
    pages: {
        signIn: "/login"
    }
})

export { handler as POST, handler as GET }