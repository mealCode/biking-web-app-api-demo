import { Schema, Model, Document, model } from 'mongoose';

export interface IBiking extends Document {
  date: Date;
  location: string;
  notes: string;
}

const bikingSchema = new Schema(
  {
    date: Date,
    location: String,
    notes: String,
  },
  {
    timestamps: true,
    collection: 'biking_records',
  }
);

const Biking: Model<IBiking> = model('Biking', bikingSchema);

export default Biking;
