const router = require("express").Router();
let Student = require("../models/student");

router.route("/add").post((req, res) => {
  const rollNo = Number(req.body.rollNo);
  const name = req.body.name;
  const gender = req.body.gender;

  const newStudent = new Student({
    rollNo,
    name,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;

  const { rollNo, name, gender } = req.body;

  const updateStudent = {
    rollNo,
    name,
    gender,
  };

  try {
    const update = await Student.findByIdAndUpdate(userId, updateStudent);
    if (!update) {
      return res.status(404).send({ status: "User not found" });
    }
    res.status(200).send({ status: "User updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "Error with updating data",
      error: err.message,
    });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  const deletes = await Student.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await Student.findById(userId)
    .then((student) => {
      res.status(200).send({ status: "user fetch", student });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get User", error: err.message });
    });
});

module.exports = router;
