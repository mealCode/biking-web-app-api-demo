import * as dotenv from 'dotenv-safe';

dotenv.config();

export default {
  PORT: process.env.PORT,
  ORIGINS: process.env.ORIGINS,
  MONGO_CONFIG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  MONGODB_URL: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.acxdw.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
};
