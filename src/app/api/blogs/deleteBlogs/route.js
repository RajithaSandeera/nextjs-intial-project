import connectToDB from '@/dataBase';
import { NextResponse } from 'next/server';
import Blog from "@/app/models/blogs";


export async function DELETE(req){
    try{
      await connectToDB();
      const { searchParams } = new URL(req.url);
      const currentBlogId = searchParams.get('id');
      if(!currentBlogId){
        return NextResponse.json({
          success: false,
          message: "ID not found!"
        })
      }
      const deleteId = await Blog.findByIdAndDelete(currentBlogId);
      if(deleteId){
        return NextResponse.json({
          success:'true',
          message:'Successfully Deleted Blog !!'
        }) 
      }else {
       return  NextResponse.json({
          success:false,
          message:'Deleting Blogs Unsuccessful !!'
        })
      }
     }catch(e){
      return NextResponse.json({
        success:false,
        message:`Something went wrong ${e}!!!`
      })
    }
}