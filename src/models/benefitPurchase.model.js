import { Schema, model, Types } from 'mongoose';

// Setup schema
const benefitPurchaseSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  benefit: {
    type: Types.ObjectId,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  }
});

export default model('benefitPurchase', benefitPurchaseSchema, 'benefitPurchase');