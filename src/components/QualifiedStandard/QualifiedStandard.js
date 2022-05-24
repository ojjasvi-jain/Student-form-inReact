import React from "react";
var cloneDeep = require("lodash.clonedeep");

const QualifiedStandard = ({ studenInfo, setStudentInfo }) => {
  console.log("inside a function", studenInfo.qualifiedClass);
  const onChangeHandler = (e) => {
    let newStudentInfo = cloneDeep(studenInfo);

    console.log("newStudentInfo", newStudentInfo);
    if (e.target.name.split("-")[0] === "percentage ") {
      let index = Number(e.target.name.split("-")[1]);
      newStudentInfo.qualifiedClass[index].percentage = e.target.value;
    }

    setStudentInfo(newStudentInfo);
  };
  return studenInfo.qualifiedClass.map((value, index) => (
    <fieldset key={value.standard}>
      <legend>standard {value.standard} </legend>
      <label htmlFor="remark">remark </label>
      <input
        id="remark"
        type="text"
        className="form-control"
        name="remark"
        disabled
        defaultValue="passed"
      />
      <label htmlFor="percentage">percentage </label>
      <input
        id="percentage"
        type="text"
        className="form-control"
        name={`percentage - ${index}`}
        placeholder="Enter percentage"
        value={value.percentage}
        onChange={onChangeHandler}
      />
    </fieldset>
  ));
};

export default QualifiedStandard;
