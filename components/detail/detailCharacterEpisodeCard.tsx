"use clinet";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export type DetailCharacterEpisodeCardProps = {
  id: number;
  episode: string;
  name: string;
  air_date: string;
};

const DetailCharacterEpisodeCard = ({
  air_date,
  episode,
  id,
  name,
}: DetailCharacterEpisodeCardProps) => {
  const router = useRouter();
  return (
    <div
      className="flex w-full justify-between items-center border p-2 cursor-pointer"
      onClick={() => router.push(`/episode/${id}`)}
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-bold">{episode}</h2>
        <div>
          <p className="text-sm text-black/70">{name}</p>
          <span className="text-sm text-black/70">{air_date}</span>
        </div>
      </div>
      <ChevronRight />
    </div>
  );
};

export default DetailCharacterEpisodeCard;
