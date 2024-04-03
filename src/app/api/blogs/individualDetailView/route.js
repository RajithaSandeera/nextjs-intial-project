import Blog from "@/app/models/blogs";
import connectToDB from "@/dataBase";
import { NextResponse } from "next/server";

export async function GET(req){
  try{
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const currentBlogId = searchParams.get("id")
    if(!currentBlogId){
      return NextResponse.json({
        success: false,
        message:`Id is required` 
      })
    }
    const blogDetails = await Blog.find({_id : currentBlogId});    
    if(blogDetails && blogDetails .length > 0){
      return NextResponse.json({
        success: true,
        data : blogDetails[0],
      }) 
    }else{
      return NextResponse.json({
        success: false,
        message:'error data fetching !!!'
      })
    }
  } catch(e){
    return NextResponse.json({
      success: false,
      message:`Unexpected error occur !!!${e}`
    })
  }
}