import { MongoClient } from 'mongodb';

export const connectToMongo = async () => {
  const client = await MongoClient.connect(`${process.env.mongoDbPath}`);
  return client;
};
