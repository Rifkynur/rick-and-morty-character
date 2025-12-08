import React from "react";
import CharacterContainer from "@/components/home/characterContainer";

const HomePages = () => {
  return (
    <div>
      <h1 className="font-bold text-center font-rickAndMorty tracking-wide text-xl md:text-2xl">
        Rick and Morty
      </h1>
      <CharacterContainer />
    </div>
  );
};

export default HomePages;
