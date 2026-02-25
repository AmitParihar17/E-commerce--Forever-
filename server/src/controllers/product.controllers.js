import mongoose from "mongoose";
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
    const localFilePath = req.files?.path;
    if (!localFilePath) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }
    const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
    if (!cloudinaryResponse) {
      return res.status(400).json({
        success: false,
        message: "Failed to upload image on cloudinary",
      });
    }
    const checkExistingProductUsingName = await Product.findOne({ name });
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
      sizes: JSON.parse(sizes),
      image: [
        {
          url: cloudinaryResponse.secure_url,
          public_id: cloudinaryResponse.public_id,
        },
      ],
    });

    return res.status(201).json({
      success: true,
      message: "product added successfully",
      product,
    });
  } catch (error) {
    console.log(error.message, "Error while add product");

    return res.status(500).json({
      success: false,
      message: "Server error ,Failed to add Product",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (allProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No product found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All products fetch successfully",
      allProducts,
    });
  } catch (error) {
    console.log(error.message, "Error while fetching products");

    return res.status(500).json({
      success: false,
      message: "Server error ,Failed to fetch all products",
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product id",
      });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetch product",
      product,
    });
  } catch (error) {
    console.log(error.message, "Error while fetch single product");

    return res.status(500).json({
      success: false,
      message: "Server error ,Failed to fetch  product",
    });
  }
};

const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
              return res.status(400).json({
                success: false,
                message: "Invalid product id",
              });
        }
        const product = await Product.findById(id)

        if(!product){
             return res.status(404).json({
               success: false,
               message: "Product not found",
             });
        }
        for (let img of product.image) {
          await cloudinary.uploader.destroy(img.public_id);
        }

        await Product.findByIdAndDelete(id)
          return res.status(200).json({
            success: true,
            message: "Product deleted",
          });
     } catch (error) {
        console.log(error.message, "Error while delete product");

        return res.status(500).json({
          success: false,
          message: "Server error ,Failed to delete product",
        });
    }
}
export { addProduct, getAllProducts, getSingleProduct,deleteProduct};
