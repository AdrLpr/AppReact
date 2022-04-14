import React from "react";
import s from "./Hobbies.module.css";
export default function Hobbies() {
  return (
    <>
      <p className={s.titre_list}>Liste des compétences:</p>
      <ol className={s.list_container}>
        <li>Programmation</li>
        <li>Graphisme</li>
        <li>Vidéos</li>
      </ol>
    </>
  );
}

//Ajouter du style la liste de passion:
//1- Enlever les nombres a gauche de chaque item.
//2- Positionner le texte a gauche.
//3- Augmenter la taille de la police.
//4- Mettre la police en gras.
