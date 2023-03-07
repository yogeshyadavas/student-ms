import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("student Added");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={sendData}>
        <div className="">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg shadow-md p-2"
            id="age"
            placeholder="student Roll No."
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="form-group">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg shadow-md p-2"
            id="name"
            placeholder="student name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg shadow-md p-2"
            id="gender"
            placeholder="student gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <br />
        <button
          type="submit"
          className="border-2 border-gray-300 rounded-lg shadow-md p-2 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
