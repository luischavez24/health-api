import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb+srv://luis:developer@notemaster-develop-s1ccj.mongodb.net/test?retryWrites=true';
const DATABASE_NAME = 'health-exercise';

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  dbName: DATABASE_NAME
})
  .then(() => {
    console.log('Connected to Mongo DB');
  })
  .catch((err) => {
    console.error(err);
  });

// export default mongoose.connection;