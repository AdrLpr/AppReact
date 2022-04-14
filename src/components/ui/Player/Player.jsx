import React from "react";

export default function Player() {
  const score = 200;

  //   if (score > 500) {
  //     return (
  //       <div>
  //         <p>Status joueur</p>
  //         <p>Vainqueur: {score}</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>Status joueur</p>
  //         <p>Perdant: {score}</p>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <p>Status joueur:</p>
      <p>
        {score > 500 ? "Vainqueur: " : "Perdant: "} {score}
      </p>
    </div>
  );
}
