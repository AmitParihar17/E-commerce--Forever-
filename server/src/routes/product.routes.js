import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.controllers";
import { upload } from "../middleware/multer.middleware";

const productRouter = Router();

productRouter.post("/add", upload.array("image", 4), addProduct);
productRouter.get("/get-all", getAllProducts);
productRouter.get("/get/:id", getSingleProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
