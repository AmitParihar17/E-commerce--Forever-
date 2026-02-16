 import React from "react";

 const SignIn = () => {
   return (
     <div className="flex justify-center items-center h-screen bg-gray-100">
       <div className="bg-white w-96 p-8 rounded-2xl shadow-2xl">
         <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

         {/* Email */}
         <div className="flex flex-col mb-4">
           <label className="text-gray-600 mb-1 text-sm">Email Address</label>
           <input
             className="border border-gray-300 rounded-lg py-3 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
             type="email"
             placeholder="your@email.com"
           />
         </div>

         {/* Password */}
         <div className="flex flex-col mb-6">
           <label className="text-gray-600 mb-1 text-sm">Password</label>
           <input
             className="border border-gray-300 rounded-lg py-3 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
             type="password"
             placeholder="password..."
           />
         </div>

         {/* Button */}
         <button className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200">
           Login
         </button>
       </div>
     </div>
   );
 };

 export default SignIn;
