import { CiHome } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { CgHome } from "react-icons/cg";



export const Categories = [
  'All Categories',
  'Mobile',
  'Laptops & Accessories',
  'Wearables',
  'Headphones & Audio',
  'Kitchen & Dining',
  'Men\'s Clothing',
  'Women\'s Clothing',
  'Kid\'s Wear',
  'Skincare',
];

export const stockStatusOptions = [
  "All",
  "Active",
  "Low stock",
  "Out of stock",
];

export const CategoryBrandMap: Record<string, string[]> = {

  "Mobile": ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google", "Realme", "Nokia", "Motorola"],
  "Laptops & Accessories": ["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Razer"],
  "Wearables": ["Fitbit", "Apple", "Samsung", "Garmin", "Huawei", "Xiaomi", "Noise", "Boat"],
  "Headphones & Audio": ["Sony", "Bose", "JBL", "Sennheiser", "Skullcandy", "Boat", "Beats", "Realme"],
  "Kitchen & Dining": ["Philips", "Prestige", "Butterfly", "Panasonic", "Bajaj", "Tefal", "Hamilton Beach"],
  "Men's Clothing": ["H&M", "Zara", "Nike", "Adidas", "Levi's", "Uniqlo", "Puma", "Jack & Jones"],
  "Women's Clothing": ["H&M", "Zara", "Forever 21", "Nike", "Adidas", "Levi's", "Shein", "Mango"],
  "Kid's Wear": ["Carter’s", "OshKosh", "Mothercare", "Zara Kids", "Gap Kids", "H&M Kids", "Nike", "Adidas"],
  "Skincare": ["L'Oreal", "Garnier", "Pond's", "Olay", "Nivea", "Neutrogena", "The Ordinary", "Cetaphil"]
};
