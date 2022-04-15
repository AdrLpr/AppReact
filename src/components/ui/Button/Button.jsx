import React from "react";

export default function Button({
  action,
  success,
  danger,
  warning,
  outline,
  children,
}) {
  let color = success
    ? "green"
    : danger
    ? "red"
    : warning
    ? "orange"
    : "royalblue";

  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "5px",
        margin: "10px 0",
        fontWeight: "bold",
        backgroundColor: outline ? "transparent" : color,
        color: outline ? color : "white",
        border: outline ? "solid 2px " + color : "none",
      }}
      onClick={action}
    >
      {children}
    </button>
  );
}