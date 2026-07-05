import mongoose, { Schema, models } from "mongoose";

export interface IBlog {
  slug: string;
  title: string;
  thumbnail: string;
  content: string;
  excerpt: string;
  author: string;
  date: Date;
  tags: string[];
  readTimeMinutes: number;
  published: boolean;
}

const BlogSchema = new Schema<IBlog>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, default: "" },
    content: { type: String, default: "" },
    excerpt: { type: String, default: "" },
    author: { type: String, default: "Saptasindhu" },
    date: { type: Date, required: true },
    tags: [{ type: String, trim: true }],
    readTimeMinutes: { type: Number, default: 5 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

BlogSchema.index({ published: 1, date: -1 });
BlogSchema.index({ tags: 1 });

export default models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
