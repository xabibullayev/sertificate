import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    sertificate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
