import React from "react";
import { Badge } from "../ui/badge";

type CharacterCardProps = {
  id: number;
  image: string;
  status: string;
  name: string;
  location: string;
};

const CharacterCard = ({
  id,
  image,
  location,
  name,
  status,
}: CharacterCardProps) => {
  const statusVariant: "Alive" | "Dead" | "unknown" =
    status === "Alive" ? "Alive" : status === "Dead" ? "Dead" : "unknown";
  return (
    <div className="mx-auto border border-blue-400 rounded-lg w-full relative">
      <img
        src={image}
        alt="img"
        className="w-full h-96 rounded-t-lg md:h-64 object-cover"
      />
      <Badge className={`absolute top-1 left-1`} variant={statusVariant}>
        {status}
      </Badge>
      <div className="p-3 flex flex-col gap-2 md:gap-4">
        <h2 className="font-bold font-rickAndMorty tracking-wider md:text-lg">
          {name}
        </h2>
        <div>
          <p className="text-sm">Latest location : </p>
          <h3 className="font-medium md:text-lg">{location}</h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
