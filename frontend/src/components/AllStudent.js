import React, { useEffect, useState } from "react";
import axios from "axios";

const AllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getStudents();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow rounded p-4 w-[40rem]">
        <div>
          <div className="flex justify-center p-4">
            <h1 className="text-xl font-bold">All students</h1>
          </div>
          <div className="flex justify-center">
            <p className="border px-4 py-2 w-[10rem]">Roll No.</p>
            <p className="border px-4 py-2 w-[16rem]">Name</p>
            <p className="border px-4 py-2 w-[10rem]">Gender</p>
          </div>
          {students.map((student) => (
            <div key={student._id} className="flex justify-center">
              <p className="border px-4 py-2 w-[10rem]">{student.rollNo}</p>
              <p className="border px-4 py-2 w-[16rem]">{student.name}</p>
              <p className="border px-4 py-2 w-[10rem]">{student.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudent;
