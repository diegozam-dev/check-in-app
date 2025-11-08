import 'server-only';
import * as jwt from 'jose';
import { cookies } from 'next/headers';
import { SessionPayload } from './types';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export const encrypt = async (payload: SessionPayload) => {
  return new jwt.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
};

export const decrypt = async (session: string | undefined = '') => {
  try {
    const { payload } = await jwt.jwtVerify(session, encodedKey, {
      algorithms: ['HS256']
    });

    return payload;
  } catch (error) {
    console.log(error);
  }
};

export const createSession = async (userId: string, role: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, role, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/'
  });
};
