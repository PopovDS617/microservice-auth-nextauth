import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'not authenticated' });
    return;
  }
};

export default handler;
