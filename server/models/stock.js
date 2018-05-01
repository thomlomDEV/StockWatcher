import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  code: String,
  description: String,
  data: Array
});

export default mongoose.model('Stock', stockSchema);
