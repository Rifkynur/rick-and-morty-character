import React from "react";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  return (
    <div
      className="mx-auto border  rounded-lg w-full relative shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => router.push(`/detail/${id}`)}
    >
      <img
        src={image}
        alt="img"
        className="w-full h-96 rounded-t-lg md:h-64 object-cover"
      />
      <Badge className={`absolute top-1 left-1`} variant={statusVariant}>
        {status}
      </Badge>
      <div className="p-3 flex flex-col gap-2 md:gap-4 bg-white rounded-b-lg">
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
