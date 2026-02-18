 import React from "react";
 import { assets } from "../assets/assets";

 const Orders = () => {
   const orders = [
     {
       id: 1,
       name: "virat kohli",
       address: "00, delhi, delhi, india, 101010",
       items: 0,
       amount: 10,
       method: "COD",
       payment: "Pending",
       date: "18/2/2026",
       status: "Delivered",
     },
     {
       id: 2,
       name: "Misbah Irshad",
       address:
         "KCP colony Girote chowk Jauharabad. House no D-44, JOHARABAD, Pakistan, 41200",
       items: 1,
       amount: 74,
       method: "COD",
       payment: "Pending",
       date: "18/2/2026",
       status: "Order Placed",
     },
   ];

   return (
     <div className="p-6 w-full">
       <h1 className="text-2xl font-semibold mb-6 text-gray-700">Order Page</h1>

       {orders.map((order) => (
         <div
           key={order.id}
           className="grid grid-cols-[2fr_1fr_120px_150px] gap-6 items-center border rounded-xl p-6 mb-6 bg-gray-50 hover:shadow-md transition"
         >
           {/* Left Section (Icon + Address) */}
           <div className="flex gap-4">
             <img src={assets.parcel_icon} alt="" className="w-12 h-12" />

             <div>
               <p className="font-semibold text-lg capitalize">{order.name}</p>
               <p className="text-gray-600 text-sm mt-1 break-words max-w-md">
                 {order.address}
               </p>
             </div>
           </div>

           {/* Order Info */}
           <div className="text-gray-700 text-sm space-y-1">
             <p>
               <span className="font-medium">Items:</span> {order.items}
             </p>
             <p>
               <span className="font-medium">Method:</span> {order.method}
             </p>
             <p>
               <span className="font-medium">Payment:</span>{" "}
               <span
                 className={
                   order.payment === "Pending"
                     ? "text-yellow-600"
                     : "text-green-600"
                 }
               >
                 {order.payment}
               </span>
             </p>
             <p>
               <span className="font-medium">Date:</span> {order.date}
             </p>
           </div>

           {/* Price */}
           <div className="text-xl font-semibold text-gray-800">
             ${order.amount}
           </div>

           {/* Status */}
           <div>
             <select
               defaultValue={order.status}
               className="border rounded-lg px-4 py-2 text-gray-700 bg-white"
             >
               <option>Order Placed</option>
               <option>Processing</option>
               <option>Shipped</option>
               <option>Delivered</option>
             </select>
           </div>
         </div>
       ))}
     </div>
   );
 };

 export default Orders;
