import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/app/lib/prisma";

export async function DELETE(req: NextRequest) {
  const authorizationHeader = req.headers.get("Authorization");
  if (!authorizationHeader) {
    return NextResponse.json(
      { message: "Missing Authorization header" },
      { status: 401 }
    );
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { message: "Invalid Authorization header format" },
      { status: 401 }
    );
  }

  const decodedToken = jwt.verify(token, process.env.SECRET_KEY!) as {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    iat: number;
  };

  if (!decodedToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = decodedToken.id;

  const url = new URL(req.url);
  const productId = url.pathname.split("/").pop();

  if (!productId) {
    return NextResponse.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  const deletedProduct = await prisma.product.findFirst({
    where: {
      id: Number(productId),
    },
  });

  if (!deletedProduct) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  if (deletedProduct.userId !== userId) {
    return NextResponse.json(
      { message: "You are not authorized to delete this product" },
      { status: 403 }
    );
  } else {
    await prisma.product.delete({
      where: { id: Number(productId) },
    });
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  }
}
