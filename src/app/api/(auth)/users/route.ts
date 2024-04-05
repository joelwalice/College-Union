import bcrypt from "bcrypt"
import connect from "@/lib/db";
import Admin from "@/lib/modals/admin-data"


export const GET = async (request: Request) => {
    try{
        await connect();
        const users = await Admin.find();
        console.log(users.length);
        return new Response(JSON.stringify(users), {status:200});
    }
    catch(err){
        return new Response(JSON.stringify(err), {status: 500});
    };
}

export const POST = async (request: Request) => {
    try {
      const body = await request.json();
      const hashedPassword = await bcrypt.hash(body.password, 10); // 10 is the saltRounds

    const newAdmin = new Admin({
            name: body.name,
            email: body.email,
            password: hashedPassword, // Use the hashed password here
            role: body.role,
            new: body.new
        });
      await connect();
      await newAdmin.save();
  
      return new Response(
        JSON.stringify({ message: "User is created", user: newAdmin }),
        { status: 201 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          message: "Error in creating user",
          error,
        }),
        {
          status: 500,
        }
      );
    }
  };

  export const PATCH = async (request: Request) => {
    try {
      const body = await request.json();
      const { email, New } = body;
      await connect();
  
      const updatedUser = await Admin.findOneAndUpdate(
        { email: email }, 
        { $set: { email : email, new: false } }, 
        { new: true }
    );
  
      if (!updatedUser) {
        return new Response(
          JSON.stringify({
            message: "User not found or didn't update user successfully.",
          }),
          {
            status: 400,
          }
        );
      }
      return new Response(
        JSON.stringify({
          message: "Username updated successfully",
          user: updatedUser,
        }),
        {
          status: 200,
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          message: "Error updating username",
          error,
        }),
        {
          status: 500,
        }
      );
    }
  };