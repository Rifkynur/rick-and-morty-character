"use client";
import GoBackButton from "../common/goBackButton";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import CharacterCard, { CharacterCardProps } from "../common/characterCard";
import SkeletonDetail from "../detail/SkeletonDetail";

const DetailEpisodeContainer = () => {
  const params = useParams();
  const { data: episode, isLoading } = useQuery({
    queryKey: ["episode", params?.id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/episode/${params?.id}`);
      return res.data;
    },
  });
  const { data: characters } = useQuery({
    enabled: !!episode,
    queryKey: ["episode-characters", episode?.id],
    queryFn: async () => {
      // Extract ID dari URL
      const ids = episode.characters.map((c: string) => c.split("/").pop());

      const res = await axiosInstance.get(`/character/${ids.join(",")}`);
      return res.data;
    },
  });
  console.log(characters);
  return (
    <div>
      <GoBackButton />
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-xl font-rickAndMorty font-bold md:text-2xl">
              {episode?.name}
            </h1>
            <div className="flex justify-between items-start mx-auto w-full max-w-xl">
              <div className="text-sm font-semibold text-black/50 dark:text-white/50">
                <p>Episode:</p>
                <p className="text-lg">{episode?.episode}</p>
              </div>
              <div className="text-sm font-semibold text-black/50 dark:text-white/50">
                <p>Date:</p>
                <p className="text-lg">{episode?.air_date}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold my-4">Cast : </h3>

            <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
              {characters?.map((character: CharacterCardProps) => (
                <CharacterCard
                  key={character?.id}
                  id={character?.id}
                  image={character?.image}
                  location={character?.location}
                  name={character?.name}
                  status={character?.status}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailEpisodeContainer;
