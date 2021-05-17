import React, { useState } from "react";
import FavoritesModal from "./FavoritesModal";
import Step2 from "./Step2";
import SurveySummary from "./SurveySummary";
import UserInfo from "./UserInfo";

const Modal = (props) => {
  const [level, setLevel] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [favouriteBook, setFavouriteBook] = useState("");
  const [colors, setColors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  const handleSelectColors = (value) => {
    console.log("value", value);
    setColors([...colors]);
    console.log("this.state.selectedColors", colors);
  };

  const handleNext = () => {
    if ((age === "" || gender === "") && level === 2) {
      setErrorMessage("Age and Gender are required feilds");
    } else if ((favouriteBook === "" || colors.length === 0) && level === 3) {
      setErrorMessage("Favorite Book and colors are required feilds");
    } else {
      setLevel((prevLevel) => prevLevel + 1);
      setErrorMessage("");
    }
  };

  const handlePrevious = () => {
    setLevel((prevLevel) => prevLevel - 1);
  };

  const showInput = ({ level }) => {
    if (level === 1) {
      return (
        <UserInfo
          onChange={(e) => setEmail(e.target.value)}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleUserName={(e) => setUserName(e.target.value)}
          userName={userName}
          handleEmail={(e) => setEmail(e.target.value)}
          email={email}
        />
      );
    } else if (level === 2) {
      return (
        <Step2
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleAge={(e) => setAge(e.target.value)}
          age={age}
          handleGender={(e) => setGender(e.target.value)}
          gender={gender}
          errorMessage={errorMessage}
        />
      );
    } else if (level === 3) {
      return (
        <div>
          <FavoritesModal
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleFavoriteBook={(e) => setFavouriteBook(e.target.value)}
            favouriteBook={favouriteBook}
            setColors={colors}
            handleSetColors={handleSelectColors}
            errorMessage={errorMessage}
          />
        </div>
      );
    } else {
      return (
        <div>
          <SurveySummary
            userName={userName}
            email={email}
            age={age}
            gender={gender}
            handlePrevious={handlePrevious}
            favouriteBook={favouriteBook}
            colors={colors}
            show={props.closeModal}
          />
        </div>
      );
    }
  };
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <h2>Step: {level}</h2>
        <div>{showInput({ level })}</div>
      </div>
    </div>
  );
};

export default Modal;
