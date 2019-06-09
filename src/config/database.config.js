import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  dbName: process.env.MONGO_DATABASE
})
.then(() => {
  console.log('Connected to Mongo DB');
})
.catch((err) => {
  console.error(err);
});