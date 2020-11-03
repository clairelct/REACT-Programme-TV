import React from "react";

const Emission = ({ time, title, type, duration, image, isUnseen, direct }) => {
  return (
    <div className="emission">
      <div>
        <p>{time}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <p className="type">{type}</p>
        <p>
          {duration} {direct ? <span className="red">&bull; Direct</span> : ""}{" "}
          {isUnseen ? <span className="red">&bull; Inédit</span> : ""}
        </p>
      </div>
    </div>
  );
};

export default Emission;
