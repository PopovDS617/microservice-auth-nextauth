import { getSession } from 'next-auth/react';
import { connectToMongo } from '../../../lib/db';
import { comparePassword, hashPassword } from '../../../lib/auth';

const handler = async (req, res) => {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req: req });
  console.log(session);
  if (!session) {
    res.status(401).json({ message: 'not authenticated' });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const plainNewPassword = req.body.newPassword;
  const hashedNewPassoword = await hashPassword(plainNewPassword);

  const client = await connectToMongo();

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({
    email: userEmail,
  });

  if (!user) {
    client.close(res.status(404).json({ message: 'user not found' }));
    return;
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await comparePassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(422).json({ message: 'invalid password' });
    client.close();
    return;
  }

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedNewPassoword } }
  );
  client.close();
  res.status(200).json({ message: 'password updated' });
};

export default handler;
