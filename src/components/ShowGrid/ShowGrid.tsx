import React from "react";
import { Show } from "../../types";

// searchResult

export const ShowGrid = ({ shows }: { shows: Show[] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <h1> TODAY's SHOWS </h1>
      {shows.map((show) => (
        <div
          key={show.id}
          style={{
            width: "100px",
            background: "salmon",
            margin: "2px",
            padding: "10px",
          }}
        >
          {show.name}
        </div>
      ))}
    </div>
  );
};

export default ShowGrid;
