import * as mongoose from 'mongoose';
export const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  birth: Date,
});
