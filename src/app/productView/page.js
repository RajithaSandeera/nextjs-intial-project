
import React from "react"
import ProductViewComponent from "../components/ProductViewComponent";
import axios from "axios";

const getProduct = async () => {
 try {
   const response  = await axios.get('https://dummyjson.com/products')
   return response.data;
 } catch (error) {
    return Error('fetch failed !!', error);
 } 
}

export default async function productView (){
  
  const productValues =  await getProduct()
  console.log('products', productValues)
  return (
    <div>
    <ProductViewComponent product={productValues.products}/>

    </div>
  );

}