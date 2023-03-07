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
    <div className="bg-white shadow rounded p-4">
      <h1 className="text-xl font-bold items-center">All students</h1>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Roll No.</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Gender</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      {students.map((student) => (
        <div key={student._id}>
          <table className="table-auto w-full mt-4">
            <tbody>
              <tr>
                <td className="border px-4 py-2">{student.rollNo}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AllStudent;
