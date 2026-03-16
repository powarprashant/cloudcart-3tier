import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList(){

 const [products,setProducts] = useState([])

 useEffect(()=>{

   axios.get("/api/products")
   .then(res => setProducts(res.data))
   .catch(err => console.log(err))

 },[])

 return(

  <div className="product-grid">

   {products.map(product => (
     <ProductCard key={product.id} product={product}/>
   ))}

  </div>

 )

}

export default ProductList