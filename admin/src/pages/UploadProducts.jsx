 import React, { useState } from "react";
 import { assets } from "../assets/assets";

 const UploadProducts = () => {
   const [images, setImages] = useState([null, null, null, null]);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [category, setCategory] = useState("Men");
   const [subCategory, setSubCategory] = useState("");
   const [price, setPrice] = useState("");
   const [sizes, setSizes] = useState([]);
   const [bestseller, setBestseller] = useState(false);

   const handleImageChange = (index, file) => {
     const newImages = [...images];
     newImages[index] = file;
     setImages(newImages);
   };

   const toggleSize = (size) => {
     setSizes((prev) =>
       prev.includes(size)
         ? prev.filter((item) => item !== size)
         : [...prev, size],
     );
   };

   const handleSubmit = (e) => {
     e.preventDefault();

     const productData = {
       name,
       description,
       category,
       subCategory,
       price,
       sizes,
       bestseller,
       images,
     };

     console.log(productData);
   };

   return (
     <form onSubmit={handleSubmit} className="w-full">
       <h2 className="text-2xl font-medium">Upload Image</h2>

       {/* Image Upload */}
       <div className="flex gap-4 my-5">
         {images.map((img, index) => (
           <label key={index}>
             <input
               type="file"
               hidden
               onChange={(e) => handleImageChange(index, e.target.files[0])}
             />
             <img
               className="w-30 cursor-pointer"
               src={img ? URL.createObjectURL(img) : assets.upload_area}
               alt=""
             />
           </label>
         ))}
       </div>

       {/* Product Details */}
       <div className=" w-150 p-5 space-y-4">
         <div className="flex flex-col">
           <label className="text-gray-700 text-xl">Product Name</label>
           <input
             value={name}
             onChange={(e) => setName(e.target.value)}
             className="py-3 px-6 mt-2 border-2 border-gray-700"
             type="text"
             placeholder="Enter product name"
           />
         </div>

         <div className="flex flex-col">
           <label className="text-gray-700 text-xl">Product Description</label>
           <textarea
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             className="py-4 px-6 border-2 border-gray-700"
             placeholder="Write content here"
           ></textarea>
         </div>

         <div className="flex gap-5">
           <div className="flex flex-col">
             <label className="text-gray-700 text-xl">Category</label>
             <select
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               className="border-2 border-gray-700 py-2 px-4"
             >
               <option value="Men">Men</option>
               <option value="Women">Women</option>
               <option value="Kids">Kids</option>
             </select>
           </div>

           <div className="flex flex-col">
             <label className="text-gray-700 text-xl">Sub Category</label>
             <select
               value={subCategory}
               onChange={(e) => setSubCategory(e.target.value)}
               className="border-2 border-gray-700 py-2 px-4"
             >
               <option value="">Select</option>
               <option value="Topwear">Topwear</option>
               <option value="Bottomwear">Bottomwear</option>
               <option value="Winterwear">Winterwear</option>
             </select>
           </div>

           <div className="flex flex-col">
             <label className="text-gray-700 text-xl">Price</label>
             <input
               value={price}
               onChange={(e) => setPrice(e.target.value)}
               className="border-2 border-gray-700 py-2 px-4"
               type="number"
               placeholder="Enter price"
             />
           </div>
         </div>
       </div>

       {/* Sizes */}
       <div className="flex gap-2 mt-5">
         <p className="text-gray-700 text-xl">Sizes:</p>

         {["S", "M", "L", "XL", "XXL"].map((size) => (
           <p
             key={size}
             onClick={() => toggleSize(size)}
             className={`cursor-pointer py-2 px-3 w-10 text-center ${
               sizes.includes(size) ? "bg-black text-white" : "bg-gray-300"
             }`}
           >
             {size}
           </p>
         ))}
       </div>

       {/* Bestseller */}
       <div className="mt-4">
         <label>
           <input
             type="checkbox"
             checked={bestseller}
             onChange={() => setBestseller(!bestseller)}
           />{" "}
           Add to Bestseller
         </label>
       </div>

       {/* Submit */}
       <button
         type="submit"
         className="bg-black text-white w-30 py-3 mt-5 rounded-2xl cursor-pointer"
       >
         ADD
       </button>
     </form>
   );
 };

 export default UploadProducts;
