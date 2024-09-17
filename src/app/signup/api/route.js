import { connectDB } from "@/lib/connectDB";
const bcrypt = require('bcrypt');

export const POST = async (request) =>{

    const newUser = await request.json();
    const hashedPassword = bcrypt.hashSync(newUser.password,14);

    try {
        const DB = await connectDB();
        const userCollection = await DB.collection("users");
        const exists = await userCollection.findOne({email: newUser.email});
        if(exists){
            return Response.json({message: "User already exists"}, {status: 409});
        }else{
            const res = await userCollection.insertOne({...newUser, password: hashedPassword});
            return Response.json({message: "User successfully created"}, {status: 200});
        }
    } catch (error) {
        return Response.json({message: "Internal server error", error}, {status: 500});
    }

}