"use client";
import DetailCharacterEpisodeCard, {
  DetailCharacterEpisodeCardProps,
} from "./detailCharacterEpisodeCard";
import { ScrollArea } from "../ui/scroll-area";
import GoBackButton from "../common/goBackButton";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import { useEffect } from "react";

type DetailCardProps = {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species?: string;
  origin?: string;
  location: {
    name: string;
  };
  episodes?: DetailCharacterEpisodeCardProps[];
};

const DetailCard = ({
  gender,
  id,
  image,
  location,
  name,
  status,
  origin,
  species,
  episodes,
}: DetailCardProps) => {
  const { addFavorite, isFavorite, removeFavorite, loadFavorites } =
    useFavoriteStore();
  const alreadyFavorite = isFavorite(id);
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <>
      <GoBackButton />
      <div className="border  rounded-lg flex flex-col md:flex-row shadow-lg md:h-[550px] lg:h-[500px]">
        <img
          src={image}
          alt="image"
          className="w-full rounded-t-lg h-80 md:rounded-l-lg md:rounded-t-none object-cover md:w-[40%] md:h-full "
        />
        <div className="p-3 bg-white rounded-b-lg flex flex-col gap-4 md:gap-0 md:flex-row  md:rounded-r-lg md:rounded-b-none w-full dark:bg-[#3c3e44]">
          <div className="flex flex-col gap-3 md:justify-between md:gap-2 md:w-1/2">
            <h2 className="font-bold">Information : </h2>
            <div className=" pb-1">
              <p>Name:</p>
              <p className="font-bold text-lg tracking-wide font-rickAndMorty md:text-2xl">
                {name}
              </p>
            </div>
            <div className=" pb-1">
              <p>Gender:</p>
              <p className="text-lg font-rickAndMorty md:text-lg">{gender}</p>
            </div>
            <div className=" pb-1">
              <p>Status:</p>
              <p className="text-lg font-rickAndMorty md:text-lg">{status}</p>
            </div>
            <div>
              <p>Species:</p>
              <p className="text-lg  pb-1 font-rickAndMorty md:text-lg">
                {species ?? "-"}
              </p>
            </div>
            <div>
              <p>Origin:</p>
              <p className="text-lg  pb-1 font-rickAndMorty md:text-lg">
                {origin ?? "-"}
              </p>
            </div>
            <div>
              <p>Location:</p>
              <p className="text-lg font-rickAndMorty md:text-lg">
                {location.name ?? "-"}
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  if (alreadyFavorite) {
                    removeFavorite(id);
                  } else {
                    addFavorite({
                      id,
                      name,
                      image,
                      status,
                      location,
                    });
                  }
                }}
                className={`cursor-pointer font-bold text-sm rounded-lg px-4 py-2 ${
                  alreadyFavorite
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {alreadyFavorite ? "Remove Favorite" : "Add Favorite"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t pt-1 md:border-none md:pt-0 md:gap-2 md:w-1/2">
            <h2 className="font-bold">Episode :</h2>
            <ScrollArea className="h-96 md:h-[calc(100%-30px)]">
              {episodes?.map((episode) => (
                <DetailCharacterEpisodeCard
                  air_date={episode?.air_date}
                  key={episode?.id}
                  episode={episode?.episode}
                  id={episode?.id}
                  name={episode?.name}
                />
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
