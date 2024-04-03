import Blog from "@/app/models/blogs";
import connectToDB from "@/dataBase";
import { NextResponse} from "next/server";


export async function POST (req)
{
  try{
    await connectToDB();  
    const extractedData = await req.json();
    const newlyCreatedData = await Blog.create(extractedData)
    if(newlyCreatedData){
      return NextResponse.json({
        success: true,
        message:'Created Blog Successful !!!'
      })
    } else{
      return NextResponse.json({
        success: true,
        message:'Failed to added new Data to the Database !!!'
      })
    }
  }
  catch(e){
    return NextResponse.json({
      success: false,
      message: `something went wrong ${e}!!!`
    })
  }
  }