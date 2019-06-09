import { Schema, model } from 'mongoose';

// Setup schema
const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type:String,
    required: true
  },
  benefits: {
    type: Array,
    required: false
  }
});

export default model('exercise', exerciseSchema, 'exercise');