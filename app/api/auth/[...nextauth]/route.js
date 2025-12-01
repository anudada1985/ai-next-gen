// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "@/lib/prisma"; // create below

const handler = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      // attach role & id to session
      session.user.role = user.role || "USER";
      session.user.id = user.id;
      return session;
    }
  },
  session: {
    strategy: "jwt"
  }
});

export { handler as GET, handler as POST };
