import React from "react";
import { Button } from "./common";

const SurveySummary = (props) => {
  console.log("colors", props.gender);
  console.log("Name", props.userName);
  var name = props.userName;
  var email = props.email;
  const userName = props.userName === "" ? "Not provided" : name;
  const userEmail = props.email === "" ? "Not provided" : email;
  return (
    <div>
      <div className="title"> Summary </div>
      <div className="summaryTable">
        <div>Name : {userName}</div>
        <div>Email : {userEmail}</div>
        <div>Age : {props.age}</div>
        <div>Gender: {props.gender}</div>
        <div>Favorite Book : {props.favouriteBook}</div>
        <div>Colors : {props.colors.toString().split(",").join(", ")}</div>
      </div>

      <Button title={"Previous"} onClick={props.handlePrevious} />
      <Button title={"Submit"} onClick={props.show} />
    </div>
  );
};
export default SurveySummary;
