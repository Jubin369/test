import React from "react";
import "../css/info.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import banner from "../images/banner.png";
const Info = ({
  handleChange,
  handleNameChange,
  changePage,
  handleRegionChange,
  formData,
  region,
  handleNameKeyDown,
}) => {
  return (
    <>
      <div className="banner-container">
        <img src={banner} alt="naspo banner" />
      </div>
      <div className="info-container">
        <form className="info-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="info-input"
              onChange={handleNameChange}
              onKeyDown={handleNameKeyDown}
            />
          </div>

          <div className="form-group region-container">
            <input
              type="address"
              name="region"
              id="region"
              placeholder="Region"
              // value={formData.region}
              value={region == null ? "" : region}
              className="info-input"
              onChange={(e) => {
                handleRegionChange(e.target.value);
              }}
              required
            />
            <FaMapMarkerAlt className="map-icon" />
          </div>
          <input
            type="submit"
            value="continue"
            id="submit-info-btn"
            onClick={changePage}
          />
        </form>
      </div>
    </>
  );
};

export default Info;
