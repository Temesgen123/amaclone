import { MongoClient, ServerApiVersion } from 'mongodb';
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid missing environment variable : "MONGODB_URI');
}
const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};
let client: MongoClient;
if (process.env.NODE_ENV === 'development') {
  //In development mode, use a global variable so that tghe value
  //preserved across module reloads caused bt HMR (Hot Module Reload)
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  //In production mode it is better not to use a global variable
  client = new MongoClient(uri, options);
}
//Export a module-scoped MongoClient. By doing this in a separate module,
//the client can be shared across functions.
export default client;
