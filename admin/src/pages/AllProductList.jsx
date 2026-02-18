 import React from "react";
 import { products } from "../assets/assets";

 const AllProductList = () => {
   return (
     <div className="p-5 w-full">
       <h1 className="text-2xl text-gray-700 mb-4">All Products List</h1>

       {/* Header */}
       <div className="grid grid-cols-[100px_2fr_1fr_1fr_80px] bg-gray-100 py-3 px-4 font-semibold text-gray-700">
         <p>Image</p>
         <p>Name</p>
         <p>Category</p>
         <p>Price</p>
         <p>Action</p>
       </div>

       {/* Body */}
       {products.map((item) => (
         <div
           key={item._id}
           className="grid grid-cols-[100px_2fr_1fr_1fr_80px] items-center border-b py-3 px-4"
         >
           <img
             src={item.image}
             alt=""
             className="w-16 h-16 object-cover rounded"
           />

           <p className="truncate" title={item.name}>
             {item.name}
           </p>

           <p>{item.category}</p>

           <p>₹ {item.price}</p>

           <button className="text-red-500 font-bold hover:scale-110 transition">
             X
           </button>
         </div>
       ))}
     </div>
   );
 };

 export default AllProductList;
