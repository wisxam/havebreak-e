import { signJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;

    const accessToken = signJwtAccessToken(userWithoutPassword);

    const result = {
      ...userWithoutPassword,
      accessToken,
    };

    return new Response(JSON.stringify(result));
  } else {
    return new Response(
      JSON.stringify({ error: "Invalid username or password" }),
      {
        status: 401,
      }
    );
  }
}
