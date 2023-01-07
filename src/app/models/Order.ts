import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['AWAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'AWAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }],
  }
}));
