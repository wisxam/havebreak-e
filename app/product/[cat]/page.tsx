import FetchDynamicProducts from "@/app/components/product/fetchDynamicProducts";
import React from "react";

const ProductInfo = async ({ params }: { params: { cat: string } }) => {
  const { cat } = await params;

  return <FetchDynamicProducts categoryType={cat} />;
};

export default ProductInfo;
