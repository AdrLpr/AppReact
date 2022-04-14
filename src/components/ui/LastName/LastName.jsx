import React from "react";

export default function LastName() {
  let nom = "Djemai";
  let isOnline = true;

  return (
    <span
      style={{
        color: isOnline ? "green" : "red",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {nom}
    </span>
  );
}
