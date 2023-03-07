const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollNo: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
