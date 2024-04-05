import connect from "@/lib/db";
import startup from "@/lib/modals/startup-data";

export const POST = async(req:Request) => {
    try{
        const body = await req.json();
        await connect();
        const star =  new startup(body);
        await star.save();
        return new Response(
        JSON.stringify({ message: "User is created", data: star }),{ status: 201 });
    } 
    catch (error) {
      return new Response(JSON.stringify({message: "Error in creating user", error,}),{status: 500,});
    }
}