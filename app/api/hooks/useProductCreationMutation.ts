import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance"; // Assuming axiosInstance is properly set up

// Function to create a product using the API
const createProduct = async (formData: {
  productName: string;
  productPrice: number;
  productDesc: string;
  productImage: string;
  quantity: number;
  productCategory: string;
  userId: number;
}) => {
  const response = await axiosInstance.post(
    `/product/${formData.userId}`,
    formData
  );
  return response.data;
};

const useCreateProductMutation = () => {
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log("Product added successfully", data);
    },
    onError: (error: any) => {
      console.error("Error adding product:", error);
    },
  });

  return mutation;
};

export default useCreateProductMutation;
