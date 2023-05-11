import React from "react";
import WidgetOpotions from "./WidgetOpotions";
import "./widget.css";
import { FaArrowRight } from "react-icons/fa";

const Widget = () => {
  return (
    <div className="wideright p-2">
      <div className="top">
        <p>Add to your feeds</p>
        <WidgetOpotions
          name={"ANZ OILFILED SERVICES PVT. LTD"}
          image={
            "https://images.pexels.com/photos/6009022/pexels-photo-6009022.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          companyName={"company"}
          description={"Oil & Energy"}
        />
        <WidgetOpotions
          image={
            "https://images.pexels.com/photos/13446290/pexels-photo-13446290.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          }
          name={"Asmaa Elfky"}
          companyName={"Backend Laravel Developer"}
        />
        <WidgetOpotions
          name={"Chisom Okoye"}
          description={"Web Kuda"}
          companyName={"Frontend Engineer"}
          image={
            "https://images.pexels.com/photos/16544297/pexels-photo-16544297.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
        />
        <p>
          View all recommendations <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Widget;
