import React from "react";
import Emission from "./Emission";

const Emissions = ({ data }) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <Emission
            key={i}
            time={item.time}
            title={item.title}
            type={item.type}
            duration={item.duration}
            image={item.image}
            isUnseen={item.isUnseen}
            direct={item.direct}
          />
        );
      })}
    </>
  );
};

export default Emissions;
