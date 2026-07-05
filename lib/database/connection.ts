import mongoose from "mongoose";
import { attachDatabasePool } from "@vercel/functions";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongooseCache ?? { conn: null, promise: null };
global._mongooseCache = cached;

const MONGOOSE_OPTS: mongoose.ConnectOptions = {
  appName: "devrel.vercel.integration",
  maxIdleTimeMS: 5000,
  bufferCommands: false,
};

export async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, MONGOOSE_OPTS).then((m) => {
      // Attach the underlying MongoClient so Vercel can manage the connection pool
      // when serverless functions suspend and resume.
      attachDatabasePool(m.connection.getClient());
      return m;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
