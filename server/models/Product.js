import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      default: 'New',
      trim: true,
    },
    desc: {
      type: String,
      default: '',
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    detailImg: {
      type: String,
      default: '',
    },
    sizes: {
      type: [String],
      default: ['28', '30', '32', '34', '36', '38'],
    },
    featured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Format output for frontend JSON
productSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret.__v;
    return ret;
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
