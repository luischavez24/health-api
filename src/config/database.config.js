import mongoose from 'mongoose';

function configure() {
  const { MONGO_URL, MONGO_DATABASE } = process.env;
  console.log({ MONGO_URL, MONGO_DATABASE })
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    dbName: MONGO_DATABASE
  })
  .then(() => {
    console.log('Connected to Mongo DB');
  })
  .catch((err) => {
    console.error(err);
  });
}

export default {
  configure
}
