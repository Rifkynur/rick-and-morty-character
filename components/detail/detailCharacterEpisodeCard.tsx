import React from "react";
import { ChevronRight } from "lucide-react";

type DetailCharacterEpisodeCardProps = {
  id: number;
  episode: string;
  name: string;
  airDate: string;
};

const DetailCharacterEpisodeCard = ({
  airDate,
  episode,
  id,
  name,
}: DetailCharacterEpisodeCardProps) => {
  return (
    <div className="flex w-full justify-between items-center border p-2">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">{episode}</h2>
        <div>
          <p className="text-sm text-black/70">{name}</p>
          <span className="text-sm text-black/70">{airDate}</span>
        </div>
      </div>
      <ChevronRight />
    </div>
  );
};

export default DetailCharacterEpisodeCard;
