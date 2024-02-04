import Count from "../models/Count.js";

export const getCount = async (req, res) => {
  try {
    const counts = await Count.find();

    res.status(200).json(counts);
  } catch (err) {
    res.status(500).json("fdsafadsfs");
  }
};
