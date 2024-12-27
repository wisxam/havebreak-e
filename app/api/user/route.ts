import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const existedUserEmail = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  const existedUsername = await prisma.user.findFirst({
    where: {
      name: body.username,
    },
  });

  if (existedUsername) {
    return new Response(JSON.stringify({ message: "Username already taken" }), {
      status: 400,
    });
  }

  if (existedUserEmail) {
    return new Response(JSON.stringify({ message: "Email already taken" }), {
      status: 400,
    });
  }

  const user = await prisma.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result));
}
