import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocalCart } from "@/hooks/useLocalCart";
import { toast } from "@/hooks/use-toast";

type ProductCardWithVariantsProps = {
  product: {
    id: number;
    name: string;
    price: string;
    compareAtPrice: string | null;
    description: string;
    imageUrl: string;
    status: string;
    inventoryQuantity: number;
    colors: { hex: string; label: string; image: string }[];
    sizes: string[];
  };
};

export default function ProductCardWithVariants({ product }: ProductCardWithVariantsProps) {
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>(product.imageUrl);


  const { addToCart } = useLocalCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Please select color and size to add product into cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: hoverImage ?? product.imageUrl,
      variant: `${selectedColor}-${selectedSize}`,
      colorHex: selectedColor,
      size: selectedSize,
      vendorId: 1, // optional: can be passed dynamically
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} (${selectedSize}, ${selectedColor})`,
    });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all p-4">
      <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
        <img
          src={previewImage}
          alt={product.name}
          className="w-full h-full object-cover transition duration-300"
        />
      </div>

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-muted-foreground text-sm">{product.description}</p>
      <div className="mt-1 text-lg font-bold text-primary">₹{product.price}</div>

      {/* Color Swatches */}
      <div className="mt-3">
        <p className="text-sm font-medium mb-1">Color</p>
        {/* <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color.hex}
              className={`h-6 w-6 rounded-full border-2 ${selectedColor === color.hex ? "ring-2 ring-primary" : "border-gray-300"
                }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => {
                setSelectedColor(color.hex);
                setHoverImage(color.image);
              }}
              onMouseEnter={() => setHoverImage(color.image)}
              onMouseLeave={() => !selectedColor && setHoverImage(null)}
            />
          ))}
        </div> */}
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.label}
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color.hex }}
              onMouseEnter={() => setPreviewImage(color.image)}
              onMouseLeave={() => setPreviewImage(product.imageUrl)} // Reset on hover out
            />
          ))}
        </div>

      </div>

      {/* Size Selector */}
      <div className="mt-4">
        <p className="text-sm font-medium mb-1">Size</p>
        <div className="flex gap-2 flex-wrap">
          {product.sizes.map((size) => (
            <Badge
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              onClick={() => setSelectedSize(size)}
              className="cursor-pointer"
            >
              {size}
            </Badge>
          ))}
        </div>
      </div>

      <Button onClick={handleAddToCart} className="mt-4 w-full">
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
}
