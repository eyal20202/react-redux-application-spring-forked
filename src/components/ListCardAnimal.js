import React from "react";
import CardAnimal from "./CardAnimal";

export const ListCardAnimal = ({ listAnimal }) => {
  // console.log(listAnimal);
  return listAnimal.map((element) => {
    return <CardAnimal animal={element} />;
  });
};
