export const mockProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality over-ear wireless headphones",
    price: "89.99",
    categoryId: 1,
    inStock: true,
    imageUrl: "/images/headphones-black.jpg",
    colors: [
      {
        id: 101,
        name: "Black",
        hex: "#000000",
        imageUrl: "/images/headphones-black.jpg"
      },
      {
        id: 102,
        name: "Silver",
        hex: "#C0C0C0",
        imageUrl: "/images/headphones-silver.jpg"
      }
    ],
    sizes: ["Standard"]
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    description: "Stylish and comfortable casual wear",
    price: "39.99",
    categoryId: 2,
    inStock: true,
    imageUrl: "/images/shirt-blue.jpg",
    colors: [
      {
        id: 201,
        name: "Blue",
        hex: "#0000FF",
        imageUrl: "/images/shirt-blue.jpg"
      },
      {
        id: 202,
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "/images/shirt-white.jpg"
      }
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    name: "Smart LED Light Bulb",
    description: "Energy-efficient LED bulb with smart features",
    price: "24.99",
    categoryId: 3,
    inStock: true,
    imageUrl: "/images/lightbulb-white.jpg",
    colors: [
      {
        id: 301,
        name: "White",
        hex: "#FFFFFF",
        imageUrl: "/images/lightbulb-white.jpg"
      },
      {
        id: 302,
        name: "Warm White",
        hex: "#FFD700",
        imageUrl: "/images/lightbulb-warmwhite.jpg"
      }
    ],
    sizes: ["Standard"]
  },
  {
    id: 4,
    name: "Organic Face Serum",
    description: "Natural and organic face serum for glowing skin",
    price: "32.99",
    categoryId: 4,
    inStock: true,
    imageUrl: "/images/faceserum-clear.jpg",
    colors: [
      {
        id: 401,
        name: "Clear",
        hex: "#FFFFFF",
        imageUrl: "/images/faceserum-clear.jpg"
      }
    ],
    sizes: ["30ml", "50ml"]
  }
];
