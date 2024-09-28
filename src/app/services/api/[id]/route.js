import { connectDB } from "@/lib/connectDB";

export const GET = async(request,{params})=>{
    const db = await connectDB();
    try {
        const serviceCollection = await db.collection("services");
        const service = await serviceCollection.findOne({_id: params.id});
        return Response.json(service);
    } catch (error) {
        console.log(error)
    }
}