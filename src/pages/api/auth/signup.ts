import { hashPassword } from '../../../lib/auth';
import { connectToMongo } from '../../../lib/db';

const handler = async (req, res) => {
  const data = req.body;
  const { email, password } = data;
  if (!email || !email.includes('@') || !password || password.trim() < 7) {
    res.status(422).json({ message: 'invalid input' });
    return;
  }

  const client = await connectToMongo();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'user created' });
};

export default handler;
