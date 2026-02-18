import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.svg'
import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2.png";

export const assets = {
  logo,
  add_icon,
  order_icon,
  upload_area,
  parcel_icon,
};

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
]

