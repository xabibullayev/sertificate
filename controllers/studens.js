import Count from "../models/Count.js";
import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = new Student({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });

    await await newStudent.save();

    await Count.findByIdAndUpdate(
      req.body.count._id,
      {
        $inc: { count: 1 },
      },
      { new: true }
    );

    res.status(200).json("Oqiwshi kiritildi");
  } catch (err) {
    res.status(500).json(err);
  }
};
