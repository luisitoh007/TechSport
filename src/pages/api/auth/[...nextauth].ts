import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../lib/prisma';
import { compare } from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        // Encontre o usuário no banco
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.email) return null;
        // TODO: armazene e compare hashes de senha reais
        // Como exemplo, assumimos que a senha é 'senha123'
        const isValid = credentials.password === 'senha123';
        if (!isValid) return null;
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);