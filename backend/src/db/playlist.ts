import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, required: true },
});
const playlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  videos: { type: [videoSchema], required: false },
});

export const PlaylistModel = mongoose.model("Playlist", playlistSchema);

export const getPlaylists = () => PlaylistModel.find();
export const getPlaylistByType = (type: string) =>
  PlaylistModel.find({
    type,
  });
export const createPlaylist = (playlist: {
  title: string;
  description: string;
  type: string;
  link: string;
  date: Date;
}) => PlaylistModel.create(playlist);
export const deletePlaylist = (id: string) =>
  PlaylistModel.findByIdAndDelete(id);
export const updatePlaylist = (
  id: string,
  playlist: {
    title: string;
    description: string;
    type: string;
    link: string;
    date: Date;
  },
) => PlaylistModel.findByIdAndUpdate(id, playlist);
