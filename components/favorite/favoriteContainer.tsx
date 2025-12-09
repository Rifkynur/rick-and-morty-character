"use client";
import { useEffect } from "react";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import CharacterCard from "../common/characterCard";
import Empty from "../common/empty";
const FavoriteContainer = () => {
  const { loadFavorites, favorites } = useFavoriteStore();
  useEffect(() => {
    loadFavorites();
  }, []);
  return (
    <div>
      {favorites.length > 0 ? (
        <>
          <img src="/morty.png" alt="morty" className="mx-auto" />
          <h1 className="text-center font-rickAndMorty font-bold text-3xl my-4">
            Favorite
          </h1>
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
            {favorites?.map((favorite: any) => (
              <CharacterCard
                key={favorite?.id}
                name={favorite?.name}
                id={favorite?.id}
                image={favorite?.image}
                location={favorite?.location}
                status={favorite?.status}
              />
            ))}
          </div>
        </>
      ) : (
        <Empty msg="Favorite Not Found" />
      )}
    </div>
  );
};

export default FavoriteContainer;
