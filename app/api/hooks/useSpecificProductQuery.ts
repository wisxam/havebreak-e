import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { ProductWithUser } from "./useProductQuery";

const fetchProduct = async (productId: number): Promise<ProductWithUser> => {
  const response = await axiosInstance.get(`/product/${productId}`);
  return response.data;
};

const useSpecificProductQuery = (productId: number) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });
};

export default useSpecificProductQuery;
