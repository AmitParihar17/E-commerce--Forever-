 import React from "react";
 import { NavLink } from "react-router-dom";
 import { assets } from "../assets/assets";

 const Sidebar = () => {
   return (
     <div className="flex flex-col w-72 h-screen border-r-2 border-blue-100 bg-white">
       <div className="flex flex-col mt-5">
         {/* Add Items */}
         <NavLink
           to="/"
           className={({ isActive }) =>
             `flex items-center border-t border-b border-l py-3 px-6 my-2 gap-3 ${
               isActive
                 ? "border-pink-400 bg-pink-50"
                 : "border-transparent hover:border-pink-200"
             }`
           }
         >
           <img src={assets.add_icon} alt="" className="w-5 h-5" />
           <p>Add Items</p>
         </NavLink>

         {/* List Items */}
         <NavLink
           to="/all-products"
           className={({ isActive }) =>
             `flex items-center border-t border-b border-l py-3 px-6 my-2 gap-3 ${
               isActive
                 ? "border-pink-400 bg-pink-50"
                 : "border-transparent hover:border-pink-200"
             }`
           }
         >
           <img src={assets.order_icon} alt="" className="w-5 h-5" />
           <p>List Items</p>
         </NavLink>

         {/* Orders */}
         <NavLink
           to="/orders"
           className={({ isActive }) =>
             `flex items-center border-t border-b border-l py-3 px-6 my-2 gap-3 ${
               isActive
                 ? "border-pink-400 bg-pink-50"
                 : "border-transparent hover:border-pink-200"
             }`
           }
         >
           <img src={assets.order_icon} alt="" className="w-5 h-5" />
           <p>Orders</p>
         </NavLink>
       </div>
     </div>
   );
 };

 export default Sidebar;
