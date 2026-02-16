 import { useState } from "react";
 import { Route, Routes, Navigate } from "react-router-dom";
 import SignIn from "./components/SignIn";
 import Navbar from "./components/Navbar";
 import UploadProducts from "./pages/UploadProducts";
 import AllProductList from "./pages/AllProductList";
 import Orders from "./pages/Orders";
 import Sidebar from "./components/Sidebar";
import { useAdminContext } from "./context/AdminContext";

 const App = () => {
  
  const { isAdmin } = useAdminContext();
  

   if (!isAdmin) {
     return <SignIn />;
   }

   return (
     <div className="flex flex-col h-screen">
       <Navbar />

       <div className="flex flex-1">
         <Sidebar />

         <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
           <Routes>
             <Route path="/" element={<UploadProducts />} />
             <Route path="/all-products" element={<AllProductList />} />
             <Route path="/orders" element={<Orders />} />
             <Route path="*" element={<Navigate to="/" />} />
           </Routes>
         </div>
       </div>
     </div>
   );
 };

 export default App;
