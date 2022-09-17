//catch-all route
import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToMongo } from '../../../lib/db';
import { comparePassword } from '../../../lib/auth';

export default NextAuth({
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'email' },
        password: { label: 'password' },
      },
      async authorize(credentials) {
        const client = await connectToMongo();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error('no user with this email');
        }
        const isValid = await comparePassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error('wrong password');
        }

        client.close();
        return {
          email: user.email,
        };
      },
    }),
  ],
});
