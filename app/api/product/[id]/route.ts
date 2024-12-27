import prisma from "@/app/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;

  const specificProduct = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(specificProduct));
}

export async function POST(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    if (!body) {
      return new Response(
        JSON.stringify({ error: "Request body is missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const {
      productName,
      productPrice,
      productDesc,
      productImage,
      quantity,
      productCategory,
    } = body;

    if (
      !productName ||
      !productPrice ||
      !productCategory ||
      !id ||
      quantity === undefined
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const product = await prisma.product.create({
      data: {
        productName,
        productPrice,
        productDesc,
        productImage,
        quantity,
        productCategory,
        userId: Number(id),
      },
    });

    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
