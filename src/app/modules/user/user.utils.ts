import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';

export const createToken = (
  jwtPayload: {
    userId: Schema.Types.ObjectId;
  },
  secret: string,
  expiresIn: string,
) => {
  const token = jwt.sign({ userId: jwtPayload.userId.toString() }, secret, {
    expiresIn,
  });

  return token;
};
