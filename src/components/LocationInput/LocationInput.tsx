import React from "react";
import "./LocationInput.css";
import searchIcon from "../../images/searchIcon-1.png";

interface LocationInputProps {
  todaysDate: any;
  setLocation: any;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  todaysDate,
  setLocation
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLocation(e.target.location.value);
    e.target.reset();
  };

  return (
    <div className="nav-comp">
      <h2> Search Location </h2>
      <form
        className="location-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-sec">
          <input
            className="form-input"
            id="location-input"
            type="text"
            name="location"
            placeholder="City, State"
          />
          <input
            className="form-input"
            type="image"
            name="submit"
            src={searchIcon}
            alt="Search Logo"
            height="25"
          />
        </div>
      </form>
      <h4 className="title-value">{todaysDate}</h4>
    </div>
  );
};
