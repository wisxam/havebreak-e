import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

const deleteProduct = async (productId: string, token: string) => {
  const response = await axiosInstance.delete(
    `/user/deleteproduct/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export { deleteProduct };

const useDeleteProduct = () => {
  const mutation = useMutation<
    unknown,
    Error,
    { productId: string; token: string }
  >({
    mutationFn: ({ productId, token }) => deleteProduct(productId, token),
  });

  return mutation;
};
export { useDeleteProduct };
