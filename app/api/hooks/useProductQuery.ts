import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";
import { Product } from "@prisma/client";

export interface ProductWithUser extends Product {
  user: {
    name: string;
    email: string;
  };
}

const fetchProduct = async (
  page: number,
  limit: number,
  productCategory: string
): Promise<{
  products: ProductWithUser[];
  totalCount: number;
  productCategory: string;
}> => {
  const response = await axiosInstance.get(`/product`, {
    params: { page, limit, productCategory },
  });
  return response.data;
};

const useProductQuery = (
  page: number,
  limit: number,
  productCategory: string
) => {
  return useQuery({
    queryKey: ["product", page, limit, productCategory],
    queryFn: () => fetchProduct(page, limit, productCategory),
  });
};

export default useProductQuery;
