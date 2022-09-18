//catch-all route
import NextAuth from 'next-auth';

import Providers from 'next-auth/providers';
import { connectToMongo } from '../../../lib/db';
import { comparePassword } from '../../../lib/auth';

export default NextAuth({
  session: { jwt: true },

  providers: [
    Providers.Credentials({
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
