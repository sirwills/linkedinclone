import React from "react";
import "./leftgets.css";
import { FaPlus } from "react-icons/fa";

//
// ANZ OILFILED SERVICES PVT. LTD.

const WidgetOpotions = ({ image, name, description, companyName }) => {
  return (
    <div className="first p-2 ">
      <img src={image} alt="" />
      <div className="persal-details  ms-3">
        <h4>{name}</h4>
        <div className="d-flex">
          <p className="d-flex com-details">{companyName}</p>
          <p className="ms-3 com-details ">{description}</p>
        </div>

        <button className="rounded-pill">
          <FaPlus className="me-2" />
          Follow
        </button>
      </div>
    </div>
  );
};

export default WidgetOpotions;
