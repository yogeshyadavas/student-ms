import React, { useEffect, useState } from "react";
import axios from "axios";

const AllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          const newst = setStudents(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getStudents();
  }, []);
  return (
    <div>
      <div className="">
        <h1>All students</h1>

        <table className="table">
          <thead>
            <tr>
            <th scope="col">Roll No.</th>
              <th scope="col">Name</th>
              <th scope="col">gender</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      {students.map((student) => (
        <div className="" key={student.id}>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
              <td>{student.age}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AllStudent;
