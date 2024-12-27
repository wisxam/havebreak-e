"use client";

import useSpecificProductQuery from "@/app/api/hooks/useSpecificProductQuery";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import DeletionDialog from "../deletionDialog";
import { useDeleteProduct } from "@/app/api/hooks/useProductDeletionMutation";

type Props = {
  productId: string;
};

const SpecificProduct = ({ productId }: Props) => {
  const { data: session } = useSession();

  const {
    data: product,
    isLoading,
    error,
  } = useSpecificProductQuery(parseInt(productId));

  const router = useRouter();

  const deleteProductMutation = useDeleteProduct();

  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setHasLoaded(true);
    }
  }, [isLoading]);

  const handleDelete = async () => {
    try {
      await deleteProductMutation.mutateAsync({
        productId,
        token: session?.user?.accessToken || "",
      });
      console.log("Product deleted successfully");
      setIsDialogOpen(false);
      router.push("/products");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // const handleUpdate = () => {
  //   // Navigate to the update page, or open a modal for updating
  //   router.push(`/update-product/${productId}`);
  // };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Loader2 className="animate-spin text-black" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error loading product</div>
    );
  }

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  const {
    productName,
    productPrice,
    productDesc,
    productImage,
    user,
    createdAt,
    updatedAt,
    quantity,
    productCategory,
  } = product;

  return (
    <div className="mx-auto px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden transition-opacity transform duration-500 ${hasLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {productImage && (
            <Image
              src={productImage}
              alt={productName}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>

        <div className="flex flex-col space-y-6">
          <h1
            className={`text-3xl font-semibold text-gray-900 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {productName || "Product Name"}
          </h1>
          <div className="flex items-center space-x-4">
            <div
              className={`text-xl text-gray-800 font-bold transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              ${productPrice}
            </div>
            <div
              className={`text-sm text-gray-600 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Category: {productCategory}
            </div>
          </div>

          <div className="space-y-4">
            <h2
              className={`text-xl text-gray-800 font-semibold transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Description
            </h2>
            <p
              className={`text-gray-700 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              {productDesc}
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`text-xl text-gray-800 font-semibold transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Seller Information
            </h2>
            <div
              className={`text-gray-600 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <p>Owner: {user?.name}</p>
              <p>Email: {user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2
              className={`text-xl text-gray-800 font-semibold transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Product Availability
            </h2>
            <p
              className={`text-gray-600 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Quantity: {quantity} {quantity > 1 ? "Pieces" : "Piece"} left.
            </p>
            <p
              className={`text-gray-600 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Created on: {new Date(createdAt).toLocaleDateString()}
            </p>
            <p
              className={`text-gray-600 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
            >
              Last updated: {new Date(updatedAt).toLocaleDateString()}
            </p>
          </div>

          <Button
            variant="default"
            color="primary"
            className={`w-full text-lg transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
          >
            Add to Cart <ShoppingBasket className="w-4 h-4 ml-2 " />
          </Button>

          <div className="flex justify-center">
            <Button
              variant="link"
              className={`text-lg text-blue-600 hover:text-blue-800 transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}
              onClick={() => router.back()}
            >
              Back to Products
            </Button>
          </div>

          {session?.user?.email === user?.email && (
            <div className="flex justify-between mt-6 space-x-4">
              <Button
                variant="secondary"
                className="w-1/2"
                // onClick={() => openDialog("update")}
              >
                Update Product
              </Button>
              <Button
                className="w-1/2"
                variant="destructive"
                onClick={() => setIsDialogOpen(true)}
              >
                Delete Product
              </Button>
            </div>
          )}
        </div>
        <DeletionDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          productId={productId}
          sessionToken={session?.user?.accessToken}
        />
      </div>
    </div>
  );
};

export default SpecificProduct;
