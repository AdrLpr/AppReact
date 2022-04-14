import React from "react";
import styles from "./FirstName.module.css";

export default function FirstName() {
  let prenom = "Samy";
  let isOnline = true;

  return (
    <span
      className={styles.paragraph}
      style={{ color: isOnline ? "green" : "red" }}
    >
      {prenom}
    </span>
  );
}
