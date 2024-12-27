import Link from "next/link";
import { ProductMapping } from "../constants/productMapping";
import Image from "next/image";
import PageCustomize from "../components/pageCustomize";

const Product = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <PageCustomize />
      <div className="flex flex-col items-center justify-center px-6 py-16 sm:py-24 md:py-32 lg:py-40 relative z-10">
        <div className="font-bold tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-24 text-pretty text-black/65">
          Select a category to explore.
        </div>
        <div className="flex flex-wrap justify-center p-6 gap-6 md:gap-8 lg:gap-10">
          {ProductMapping.map((category) => (
            <div
              key={category.id}
              className="transition-all transform opacity-100 hover:scale-105 duration-300 flex flex-col items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gray-200 rounded-lg shadow-md cursor-pointer relative overflow-hidden animate-fade-in"
            >
              <div className="text-sm sm:text-lg font-bold z-50 mix-blend-exclusion text-white shadow-md tracking-widest">
                {category.catName}
              </div>
              <Link href={`product/${category.catName}`}>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-start items-start p-4 rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.catName}
                    layout="fill"
                    className="rounded-lg object-cover"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
