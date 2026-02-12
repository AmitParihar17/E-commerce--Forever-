 import React from "react";
 import Title from "../components/Title";
 import { useShopContext } from "../context/ShopContext";

 const Orders = () => {
   const { cartItems, currency } = useShopContext();

   return (
     <div className="px-10">
       <div className="ml-10">
         <Title text1={"My"} text2={"Orders"} />
       </div>

       <div className="mt-6 space-y-6">
         {cartItems.map((item) => (
           <div
             key={item.id}
             className="flex flex-col md:flex-row justify-between items-center border-t border-b py-6"
           >
             {/* Left Section */}
             <div className="flex gap-5 items-center w-full md:w-auto">
               <img
                 className="w-24 rounded-md"
                 src={item.image[0]}
                 alt={item.name}
               />

               <div>
                 <p className="font-medium text-lg">{item.name}</p>

                 <div className="flex gap-5 text-sm text-gray-600 mt-2">
                   <p>
                     {currency}
                     {item.price}
                   </p>
                   <p>Quantity: {item.quantity}</p>
                   <p>Size: {item.size}</p>
                 </div>

                 <p className="text-xs text-gray-500 mt-2">
                   Date: {new Date().toLocaleDateString()}
                 </p>
               </div>
             </div>

             {/* Middle Section (Status) */}
             <div className="flex items-center gap-2 mt-4 md:mt-0">
               <span className="w-3 h-3 bg-green-500 rounded-full"></span>
               <p className="text-sm font-medium text-green-600">
                 Ready to Ship
               </p>
             </div>

             {/* Right Section */}
             <div className="mt-4 md:mt-0">
               <button className="border border-black px-4 py-1 text-sm rounded hover:bg-black hover:text-white transition">
                 Track Order
               </button>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default Orders;
