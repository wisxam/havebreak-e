"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";

import { useToast } from "@/hooks/use-toast";
import useCreateProductMutation from "@/app/api/hooks/useProductCreationMutation";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: undefined,
    productDesc: "",
    productImage: "",
    quantity: undefined,
    productCategory: "electronics",
  });

  const { toast } = useToast();

  const { data: session } = useSession();

  const mutation = useCreateProductMutation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      productPrice: Number(formData.productPrice),
      quantity: Number(formData.quantity),
    };

    if (session?.user?.id) {
      mutation.mutate(
        { ...updatedFormData, userId: session.user.id },
        {
          onSuccess: (data) => {
            toast({
              title: "Product added successfully",
            });
          },
          onError: (error) => {
            toast({
              title: "An error occured please try again",
              variant: "destructive",
            });
          },
        }
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen items-center justify-center p-8">
      <div className="max-w-4xl mx-auto p-7 bg-gray-50 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <Input
              type="text"
              name="productName"
              placeholder="Enter product name"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Price
            </label>
            <Input
              type="number"
              name="productPrice"
              placeholder="Enter product price"
              value={formData.productPrice}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Description
            </label>
            <Textarea
              name="productDesc"
              placeholder="Enter product description"
              value={formData.productDesc}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Image URL
            </label>
            <Input
              type="url"
              name="productImage"
              placeholder="Enter product image URL"
              value={formData.productImage}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <Input
              type="number"
              name="quantity"
              placeholder="Enter quantity available"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Product Category
            </label>
            <Select
              value={formData.productCategory}
              onValueChange={(value) =>
                setFormData({ ...formData, productCategory: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="books">Books</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="toys">Toys</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Adding..." : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
