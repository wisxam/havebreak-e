import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductWithUser } from "@/app/api/hooks/useProductQuery";
import { ShoppingBasket } from "lucide-react";
import { categoryColors } from "@/app/constants/categoryColors";

const ProductCard = ({ product }: { product: ProductWithUser }) => {
  const categoryBackground =
    categoryColors[product.productCategory] || "#36454F";

  return (
    <div
      key={product.id}
      className="transition-transform transform hover:scale-105 duration-300"
    >
      <Card
        className="hover:opacity-100 opacity-95 max-w-xs w-full shadow-lg rounded-lg overflow-hidden bg-opacity-85 hover:bg-opacity-100 hover:shadow-xl transition-all duration-300"
        style={{ backgroundColor: categoryBackground }}
      >
        {product.productImage && (
          <CardHeader>
            <Link href={`/product/${product.productCategory}/${product.id}`}>
              <div className="relative min-w-64 h-56">
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  layout="fill"
                  className="rounded-t-lg opacity-80"
                />
                <div className="absolute tracking-wider inset-0 rounded-t-lg bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-start items-start p-4">
                  <div className="text-white text-center">
                    <p className="text-sm text-gray-200">
                      Description: {product.productDesc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </CardHeader>
        )}

        <CardContent className="space-y-2 font-sans text-gray-200">
          <h3 className="font-semibold text-2xl text-gray-100">
            {product.productName}
          </h3>
          <div className="font-semibold text-xl text-gray-300">
            ${product.productPrice}
          </div>
          <hr className="border-t border-gray-600 my-2" />
          <div className="text-sm text-gray-400">Seller Information</div>
          <h3 className="text-sm font-semibold text-opacity-80 text-gray-300">
            Owner: {product.user.name}
          </h3>
          <h3 className="text-sm font-semibold text-opacity-80 text-gray-300">
            Email: {product.user.email}
          </h3>
          <hr className="border-t border-gray-600 my-2" />
          <h1 className="text-sm text-gray-400">
            Created at: {new Date(product.createdAt).toLocaleDateString()}
          </h1>
          <hr className="border-t border-gray-600 my-2" />
          <h1 className="text-sm text-gray-400">
            Quantity: {product.quantity}
            {product.quantity > 1 ? "Pieces" : "Piece"} left.
          </h1>
        </CardContent>

        <CardFooter className="p-4 flex justify-between items-center">
          <Button variant="outline" color="primary" className="w-full text-lg">
            Add to Cart <ShoppingBasket className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
