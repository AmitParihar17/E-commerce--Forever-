import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import uploadOnCloudinary from "../utils/cloudinary.utils.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const { name, price, category, subCategory, sizes, description } = req.body;

    if (!name || !price || !category || !subCategory || !sizes || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Product already exist with this name",
      });
    }

    const imageData = [];

    for (let file of req.files) {
      const result = await uploadOnCloudinary(file.path);

      imageData.push({
        url: result.secure_url,
        public_id: result.public_id,
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      subCategory,
      sizes: Array.isArray(sizes) ? sizes : [sizes],
      image: imageData,
      description
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.log(error.message, "Error while add product");

    return res.status(500).json({
      success: false,
      message: "Server error, Failed to add Product",
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
