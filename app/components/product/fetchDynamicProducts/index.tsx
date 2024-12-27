"use client";

import useProductQuery from "@/app/api/hooks/useProductQuery";
import { Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import ProductCard from "..";
import { Button } from "@/components/ui/button";
import PageCustomize from "../../pageCustomize";

type Props = {
  categoryType: string;
};

const FetchDynamicProducts = ({ categoryType }: Props) => {
  const [page, setPage] = useState<number>(1);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false); // Track loading completion
  const limit = 4;
  const {
    data: { products, totalCount } = { products: [], totalCount: 0 },
    isLoading,
  } = useProductQuery(page, limit, categoryType);

  const totalPages = Math.ceil(totalCount / limit);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (!isLoading) {
      setHasLoaded(true);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Loader2 className="animate-spin text-black" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between min-h-screen p-6 bg-gray-100">
      <div className="flex flex-wrap justify-center gap-6">
        <PageCustomize />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={`transition-opacity transform duration-500 ${
                  hasLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <ProductCard key={product.id} product={product} />
              </div>
            ))
          ) : (
            <div
              className={`col-span-full flex justify-center items-center h-48 text-lg text-gray-500 transition-opacity transform duration-500 ${
                hasLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              No items are available in this section :(
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex justify-center gap-2 mt-auto transition-opacity duration-500 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button
          onClick={handlePrevPage}
          disabled={page === 1}
          variant="outline"
          size="sm"
          className="px-6 py-3 disabled:opacity-50"
        >
          Prev
        </Button>

        {[...Array(totalPages).keys()].map((num) => (
          <Button
            key={num}
            onClick={() => handlePageChange(num + 1)}
            variant={page === num + 1 ? "ghost" : "outline"}
            size="sm"
            className={`px-6 py-3 ${
              page === num + 1 ? "bg-slate-400 text-white" : "bg-slate-400"
            }`}
          >
            {num + 1}
          </Button>
        ))}

        <Button
          onClick={handleNextPage}
          disabled={page === totalPages}
          variant="outline"
          size="sm"
          className="px-6 py-3 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FetchDynamicProducts;
