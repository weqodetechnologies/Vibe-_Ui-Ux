import React from "react";

function PurpleBox({ children }) {
  return (
    <div
      //className="max-w-[1280px] mx-auto"
      style={{
        backgroundColor: "#5835D2",
        borderRadius: "36px",
        padding: "40px",
       // height: "959px",
      }}
    >
      {children}
    </div>
  );
}

export default PurpleBox;
