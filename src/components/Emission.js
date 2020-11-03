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
        <p>{type}</p>
        <p>
          {duration} {direct ? <span className="red">Direct</span> : ""}{" "}
          {isUnseen ? <span className="red">Inédit</span> : ""}
        </p>
      </div>
    </div>
  );
};

export default Emission;
