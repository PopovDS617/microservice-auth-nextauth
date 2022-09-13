import { MongoClient } from 'mongodb';

export const connectToMongo = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@auth-cluster.j4s4vys.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
};
