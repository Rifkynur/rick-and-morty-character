"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import DetailCard from "./detailCard";
import SkeletonDetail from "./SkeletonDetail";

const DetailContainer = () => {
  const params = useParams();

  const { data: character, isLoading } = useQuery({
    queryKey: ["character"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/character/${params?.id}`);
      return res.data;
    },
  });
  const episodeQuery = useQuery({
    enabled: !!character,
    queryKey: ["episodes", character?.episode],
    queryFn: async () => {
      const episodeIds = character.episode.map((ep: string) =>
        ep.split("/").pop()
      );

      const res = await axiosInstance.get(`/episode/${episodeIds.join(",")}`);

      return Array.isArray(res.data) ? res.data : [res.data];
    },
  });

  const episodes = episodeQuery.data;

  return (
    <div className="mx-auto">
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <DetailCard
          gender={character?.gender}
          id={character?.id}
          image={character?.image}
          location={character?.location?.name}
          name={character?.name}
          status={character?.status}
          origin={character?.origin?.name}
          species={character?.species}
          episodes={episodes}
        />
      )}
    </div>
  );
};

export default DetailContainer;
