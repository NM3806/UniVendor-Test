export const mockProducts = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "Soft cotton t-shirt",
    price: "499.00",
    imageUrl: "/images/tshirt-red.jpg",
    inStock: true,
    vendorId: 1,
    categoryId: 1,
    colors: [
      { id: 101, name: "Red", hex: "#FF0000", imageUrl: "/images/tshirt-red.jpg" },
      { id: 102, name: "Blue", hex: "#0000FF", imageUrl: "/images/tshirt-blue.jpg" },
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Casual Hoodie",
    description: "Warm and stylish hoodie",
    price: "999.00",
    imageUrl: "/images/hoodie-black.jpg",
    inStock: true,
    vendorId: 1,
    categoryId: 2,
    colors: [
      { id: 201, name: "Black", hex: "#000000", imageUrl: "/images/hoodie-black.jpg" },
      { id: 202, name: "Grey", hex: "#808080", imageUrl: "/images/hoodie-grey.jpg" },
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Lightweight running shoes",
    price: "1599.00",
    imageUrl: "/images/shoes-white.jpg",
    inStock: true,
    vendorId: 1,
    categoryId: 3,
    colors: [
      { id: 301, name: "White", hex: "#FFFFFF", imageUrl: "/images/shoes-white.jpg" },
      { id: 302, name: "Black", hex: "#000000", imageUrl: "/images/shoes-black.jpg" },
    ],
    sizes: ["7", "8", "9", "10"]
  }
];
