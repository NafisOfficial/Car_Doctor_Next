import { connectDB } from "@/lib/connectDB"

export const GET= async(request,{params})=>{
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    try {
        const res = await bookingsCollection.find({email: params.email}).toArray();
        return Response.json(res);
    } catch (error) {
        return Response.json({message: error},{status: 500})
    }
}