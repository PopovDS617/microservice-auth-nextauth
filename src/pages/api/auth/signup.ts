import { hashPassword } from '../../../lib/auth';
import { connectToMongo } from '../../../lib/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const data = req.body;
  const { email, password } = data;
  if (!email || !email.includes('@') || !password || password.trim() < 7) {
    res.status(422).json({ message: 'invalid input' });
    console.log('wrong');
    return;
  }

  const client = await connectToMongo();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'user with this email already exists' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'user created' });
  client.close();
};

export default handler;
