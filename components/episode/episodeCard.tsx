import React from "react";
import { useRouter } from "next/navigation";

export type EpisodeCardProps = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};
const EpisodeCard = ({ air_date, episode, id, name }: EpisodeCardProps) => {
  const router = useRouter();
  return (
    <div
      className="shadow-lg rounded-lg p-6 flex flex-col gap-3 items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 dark:bg-[#3c3e44]"
      onClick={() => router.push(`/episode/${id}`)}
    >
      <h2 className="font-bold text-lg text-center font-rickAndMorty">
        {name}
      </h2>
      <h3 className="text-black/70 dark:text-white/50">{air_date}</h3>
      <p className="font-bold">{episode}</p>
    </div>
  );
};

export default EpisodeCard;
