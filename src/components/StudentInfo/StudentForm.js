import React, { useState } from "react";
import "./StudentInfo.css";
import QualifiedStandard from "../QualifiedStandard/QualifiedStandard.js";

const StudentForm = () => {
  const [studenInfo, setStudentInfo] = useState({
    name: "",
    rollNumber: "",
    email: "",
    currentStandard: "0",
    qualifiedClass: [],
  });

  const onChangeHandler = (e) => {
    let newStudentInfo = { ...studenInfo };

    if (e.target.name === "name") newStudentInfo.name = e.target.value;

    if (e.target.name === "RollNumber")
      newStudentInfo.rollNumber = e.target.value;

    if (e.target.name === "currentStandard") {
      newStudentInfo.currentStandard = e.target.value;

      if (newStudentInfo.currentStandard > "0") {
        const generateArrays = Array.from(
          Array(Number(e.target.value - 1)).keys()
        );

        newStudentInfo.qualifiedClass = generateArrays.map((ele) => {
          let qualifiedStandard = {};
          qualifiedStandard.standard = ele + 1;
          qualifiedStandard.remark = "passed";
          qualifiedStandard.percentage = "";

          return qualifiedStandard;
        });
      } else newStudentInfo.qualifiedClass = [];
    }
    if (e.target.name === "emailId") newStudentInfo.email = e.target.value;

    setStudentInfo(newStudentInfo);
  };

  const onClickHandler = () => {
    alert(`  your information is:
             name    : ${studenInfo.name}
             rollNo  : ${studenInfo.rollNumber}
             email   : ${studenInfo.email}
             std     : ${studenInfo.currentStandard}

               `);
    setStudentInfo({
      name: "",
      rollNumber: "",
      email: "",
      currentStandard: "0",
      qualifiedClass: [],
    });
  };

  return (
    <div className="col-md-12">
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="nameOfStudent">Name </label>
            <input
              id="nameOfStudent"
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter full name"
              value={studenInfo.name}
              onChange={onChangeHandler}
            />

            <label htmlFor="rollNoOfStudent">Roll Number</label>
            <input
              id="rollNoOfStudent"
              type="text"
              className="form-control"
              name="RollNumber"
              placeholder="Enter Roll Number"
              value={studenInfo.rollNumber}
              onChange={onChangeHandler}
            />

            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="emailId"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="XYZ@gmail.com"
              value={studenInfo.email}
              onChange={onChangeHandler}
            />

            <label htmlFor="currentClass">current standard</label>
            <input
              type="email"
              className="form-control"
              name="currentStandard"
              id="currentClass"
              aria-describedby="emailHelp"
              placeholder="current standard"
              value={studenInfo.currentStandard}
              onChange={onChangeHandler}
            />
          </div>
        </form>
      </div>
      <form>
        {studenInfo.qualifiedClass.length ? (
          <div>
            <QualifiedStandard
              studenInfo={studenInfo}
              setStudentInfo={setStudentInfo}
            />
          </div>
        ) : null}
      </form>
      <button
        type="submit"
        name="submit"
        className="btn btn-primary"
        onClick={onClickHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default StudentForm;
