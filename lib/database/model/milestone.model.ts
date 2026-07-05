import mongoose, { Schema, models } from "mongoose";

export interface IMilestone {
  slug: string;
  title: string;
  thumbnail: string;
  youtubeLink?: string;
  photos: string[];
  description: string;
  shortDescription: string;
  date: Date;
  /** "zep" | "yashodamai" — annual events with YouTube recordings
   *  "update"             — general organisational updates
   */
  type: "zep" | "yashodamai" | "update";
  published: boolean;
}

const MilestoneSchema = new Schema<IMilestone>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, default: "" },
    youtubeLink: { type: String, default: "" },
    photos: [{ type: String }],
    description: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    date: { type: Date, required: true },
    type: {
      type: String,
      enum: ["zep", "yashodamai", "update"],
      required: true,
    },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Index for common query patterns
MilestoneSchema.index({ type: 1, date: -1 });
MilestoneSchema.index({ published: 1, date: -1 });

export default models.Milestone ||
  mongoose.model<IMilestone>("Milestone", MilestoneSchema);
