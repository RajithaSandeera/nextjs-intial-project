import Blog from "@/app/models/blogs";
import connectToDB from "@/dataBase";
import { NextResponse} from "next/server";


export async function GET(){
  try{
    await connectToDB();
    const allBlogsList = await Blog.find({})
    if(allBlogsList && allBlogsList.length > 0){
      return NextResponse.json({
        success: true,
        data: allBlogsList,
        message:'Data fetching Successful !!!'
      })
    } else{
      return NextResponse.json({
        success: false,
        message: 'Fetching data is Unsuccessful !!!'
      })
    }
  } catch(e){
    return NextResponse.json({
      success:'false',
      message:`Unexpected error occur !!!${e}`
    })
  }

}