import { Product } from "../models/product.model";
import uploadOnCloudinary from "../utils/cloudinary.utils";

const addProduct = async (req, res) => {
  try {
    const { name, price, category, subCategory, sizes } = req.body;
    if (!name || !price || !category || !subCategory || !sizes) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const localFilePath = req.file?.path;
    if (!localFilePath) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }
    const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
    if(!cloudinaryResponse){
         return res.status(400).json({
           success: false,
           message: "Failed to upload image on cloudinary",
         });
    }
    const checkExistingProductUsingName = await Product.findOne({name})
    if (checkExistingProductUsingName) {
        return res.status(400).json({
          success: false,
          message: "Product already exist with this name",
        });
    }
    const product = await Product.create({
        name,
        price,
        category,
        subCategory,
        sizes : JSON.parse(sizes),
        image : [cloudinaryResponse.secure_url]
    })

     return res.status(201).json({
       success: true,
       message: "product added successfully",
       product
     });
  } catch (error) {
    console.log(error.message,"Error while add product");
    
     return res.status(500).json({
       success: false,
       message: "Server error ,Failed to add Product",
     });
  }
};

export { addProduct };
