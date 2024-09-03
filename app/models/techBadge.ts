import mongoose, { Schema } from "mongoose";

const badgeSchema = new Schema(
  {
    techImg: String,
    techName: String
  }, 
  { 
    collection: 'techBadges'
  }
);

const TechBadge = mongoose.models.TechBadge || mongoose.model("TechBadge", badgeSchema);

export default TechBadge;