import React, { useState } from "react";
import { Button, ErrorMessage, Input } from "./input";

const colorsData = [
  { id: 1, value: "Red" },
  { id: 2, value: "Blue" },
  { id: 3, value: "Orange" },
  { id: 4, value: "Yellow" },
  { id: 5, value: "Pink" },
  { id: 6, value: "Green" },
  { id: 7, value: "Violet" },
  { id: 8, value: "Radish" },
  { id: 9, value: "Purple" },
  { id: 10, value: "None" },
];
const CheckBox = ({ checked, color, setColors, onChange }) => {
  const [isChecked, setChecked] = useState(checked);
  const addSelectedTag = (color) => {
    setColors.push(color.value);
    onChange(setColors);
  };

  const removeSelectedTag = async (color) => {
    const index = setColors.findIndex((colors) => colors === color.value);
    console.log("index", index);
    setColors.splice(index, 1);

    onChange(setColors);
  };

  const tagSelected = (color, checked) => {
    setChecked(checked);
    if (checked) {
      addSelectedTag(color);
    } else {
      removeSelectedTag(color);
    }
  };

  return (
    <div key={color.id}>
      <input
        type="checkbox"
        id={color.id}
        name={color.value}
        checked={isChecked}
        onChange={() => tagSelected(color, !isChecked)}
      />
      <span className="checkBoxLabel">{color.value}</span>
    </div>
  );
};

const CheckBoxes = ({ onChange, setColors }) => {
  return (
    <div>
      <div className="title">Select Your Favorite Colors :</div>
      {colorsData.map((color) => (
        <CheckBox
          color={color}
          key={color.id}
          onChange={onChange}
          setColors={setColors}
          checked={
            setColors.find((item) => item === color.value) ? true : false
          }
        />
      ))}
    </div>
  );
};
const FavoritesModal = (props) => (
  <div>
    <Input
      title="Favorite Book"
      type="text"
      name="FavoriteBook"
      onChange={props.handleFavoriteBook}
      value={props.favouriteBook}
      placeholder="Favorite Book"
    />
    <CheckBoxes onChange={props.handleSetColors} setColors={props.setColors} />
    <ErrorMessage message={props.errorMessage} />
    <Button title={"Next"} onClick={props.handleNext} />
    <Button title={"Previous"} onClick={props.handlePrevious} />
  </div>
);

export default FavoritesModal;
