import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/types/user";
import GoogleProvider from "next-auth/providers/google";
import { USERS } from "@/constants/users";
import FacebookProvider from "next-auth/providers/facebook";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    } as any),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }as any),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: User) => {
        if (!credentials.email || !credentials.password || !credentials) {
          return null;
        }

        const user = USERS.find(USER => { 
          console.log(USER);
          return USER.email === credentials?.email && USER.password === credentials?.password 
        });
        return user;

      },
    }),
  ],
  pages: {
    // signIn: "http://localhost:3000/",

  },
  session: {
    strategy: 'jwt',
  }
  // Add session, callbacks, database, and other configuration options here
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };