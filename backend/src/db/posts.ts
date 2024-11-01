import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  date_deb: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  id_renter: { type: String, default: null },
  status_p: { type: String, default: "unpaid" },
  total: { type: Number, required: true },
  disponibility: { type: String, default: "attendant" },
  rating: { type: Number, required: false },
  comment: { type: String, required: false },
});

const postSchema = new mongoose.Schema({
  id_owner: { type: Object, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    day: { type: Number, required: true },
    week: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  reservation: {
    type: [reservationSchema],
    required: false,
  },
  status: {
    type: String,
    required: true,
    default: "dispo",
  },
  minTime: {
    type: Number,
    required: true,
  },
});

export const PostModel = mongoose.model("Post", postSchema);
export const getPosts = () => PostModel.find();

export const getPostById = (id: string) => PostModel.findById(id);
export const getPostByOwner = (id_owner: string) =>
  PostModel.find({ id_owner });

export const createPost = (values: Record<string, any>) =>
  new PostModel(values).save().then((post) => post.toObject());

export const deletePostById = (id: string) => PostModel.findByIdAndDelete(id);

export const updatePostById = (id: string, values: Record<string, any>) =>
  PostModel.findByIdAndUpdate(id, values, { new: true });

export const getReservationByPost = (id: string) =>
  PostModel.findById(id).select("reservation");

export const getReservationByIdRenter = async (id_renter: string) => {
  const posts = await PostModel.find({ "reservation.id_renter": id_renter });

  const uniquePosts = new Map();

  posts.forEach((post) => {
    const filteredReservations = post.reservation.filter(
      (res) => res.id_renter === id_renter,
    );

    filteredReservations.forEach((reservation) => {
      const postWithSingleReservation = {
        ...post.toObject(),
        reservation: [reservation],
      };

      uniquePosts.set(
        post._id.toString() + reservation._id.toString(),
        postWithSingleReservation,
      );
    });
  });

  return Array.from(uniquePosts.values());
};

export const getPostByCategory = (category: string) =>
  PostModel.find({ category });
