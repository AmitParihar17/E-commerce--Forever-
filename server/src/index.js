import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Application started on ${port}`);
    });
  })
  .catch((error) => {
    console.error(error.message, "Failed to connect DB");
    return;
  });
