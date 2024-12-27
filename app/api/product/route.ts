import { ProductCategory } from "@/app/constants/productCategory";
import prisma from "@/app/lib/prisma";
import { console } from "inspector";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const categoryType = url.searchParams.get("productCategory") as
      | keyof typeof ProductCategory
      | null;

    const skip = (page - 1) * limit;

    const products = await prisma.product.findMany({
      where: {
        productCategory: categoryType || undefined,
      },
      skip,
      take: limit,
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const totalCount = await prisma.product.count({
      where: {
        productCategory: categoryType || undefined,
      },
    });

    if (!products || products.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ products, totalCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
