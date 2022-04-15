import React, { useState } from "react";
import Card from "../../hoc/Card/Card";
import Button from "../../ui/Button/Button";

export default function UsernameForm() {
  const [username_input, setUsername] = useState("Sam");
  const [username_error, setUsernameError] = useState("");

  //Pour Exemple:
  const [usernameAfficher, setUsernameAfficher] = useState("Sam");

  function handleUsername(event) {
    setUsername(event.target.value);
    setUsernameError("");
  }

  function saveUsername() {
    if (username_input.length >= 3 && username_input.length < 12) {
      if (username_input === "Sam") {
        setUsernameError("Username existe!");
        return;
      }
      setUsernameAfficher(username_input);
      setUsername("");
    } else {
      setUsernameError(
        username_input.length < 3
          ? "Username trop court! (Min. 3 caractères)"
          : "Username trop long! (Max. 11 caractères)"
      );
    }
  }

  // Two way binding

  return (
    <Card>
      <input
        value={username_input}
        onChange={handleUsername}
        placeholder='Entrez un username:'
      />
      <p style={{ fontSize: "12px", color: "red" }}> {username_error} </p>
      <Button action={saveUsername} success>
        Valider
      </Button>
      <h3>Votre username: {usernameAfficher} </h3>
    </Card>
  );
}