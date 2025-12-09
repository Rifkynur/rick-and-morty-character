import React from "react";
import CharacterContainer from "@/components/home/characterContainer";

const HomePages = () => {
  return (
    <div>
      <img src="/rickAndMorty.png" alt="logo" className="mx-auto" />
      <CharacterContainer />
    </div>
  );
};

export default HomePages;
