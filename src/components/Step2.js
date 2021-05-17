import React from "react";
import { Button, ErrorMessage } from "./input";

const genderValues = [
  { id: 1, value: "Male" },
  { id: 2, value: "Female" },
];

const Age = ({ handleAge, age }) => {
  const options = [];
  for (let i = 1; i < 100; i++) {
    options.push(i);
  }
  return (
    <div>
      <div className="title">Age :</div>
      <select onChange={handleAge} value={age}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} Years
          </option>
        ))}
      </select>
    </div>
  );
};
const Gender = ({ handleGender, gender }) => (
  <div>
    <div className="title">Gender : </div>
    {genderValues.map((g) => (
      <div key={g.id}>
        <input
          type="radio"
          id={g.id}
          value={g.value}
          onChange={handleGender}
          checked={g.value === gender}
        />
        <span className="radioButtonsLabel">{g.value}</span>
      </div>
    ))}
  </div>
);

const Details = (props) => (
  <div>
    <Age handleAge={props.handleAge} age={props.age} />
    <Gender handleGender={props.handleGender} gender={props.gender} />
    <ErrorMessage message={props.errorMessage} />
    <Button title={"Next"} onClick={props.handleNext} />
    <Button title={"Previous"} onClick={props.handlePrevious} />
  </div>
);

export default Details;
