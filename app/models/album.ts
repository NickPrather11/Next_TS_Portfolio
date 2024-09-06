import mongoose, { Schema } from "mongoose"

const albumSchema = new Schema(
  {
    albumName: String,
    albumImg: String,
    artistName: String,
    bandcampURL: String,
    releaseDate: Date
  }, 
  { 
    collection: 'albums'
  }
);

const Album = mongoose.models.Album || mongoose.model("Album", albumSchema);

export default Album;