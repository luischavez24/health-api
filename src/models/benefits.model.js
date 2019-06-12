import { Schema, model } from 'mongoose';

// Setup schema
const benefitsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

export default model('benefit', benefitsSchema, 'benefit');