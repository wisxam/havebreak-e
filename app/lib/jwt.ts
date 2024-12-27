import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOptions = {
  expiresIn: "1h",
};

export function signJwtAccessToken(payload: JwtPayload, options?: SignOptions) {
  const secretKey = process.env.SECRET_KEY;

  const token = jwt.sign(payload, secretKey!, options);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.SECRET_KEY;

    const decodedJwt = jwt.verify(token, secretKey!);

    return decodedJwt as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
