import React from "react";
import { Button, Input } from "./common";

const UserInfo = (props) => (
  <div>
    <div>
      <Input
        title="Name"
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={props.handleUserName}
        value={props.userName}
      />
      <Input
        title="Email"
        type="text"
        name="email"
        placeholder="Enter Email"
        onChange={props.handleEmail}
        value={props.email}
      />
    </div>
    <Button
      title={"Next"}
      onClick={props.handleNext}
      onChange={props.handleUserName}
      value={props.userName}
    />
  </div>
);

export default UserInfo;
