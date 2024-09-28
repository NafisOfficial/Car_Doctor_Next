import { connectDB } from "@/lib/connectDB";


export const POST=async(request)=>{
    const newBookings = await request.json();
    const db = await connectDB();
    const collection = await db.collection("bookings");
    try {
        const res = await collection.insertOne(newBookings);
        return Response.json({res: res},{status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"},{status: 400});
    }
}