import * as mongoose from 'mongoose';
export const PersonSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: Number,
});
