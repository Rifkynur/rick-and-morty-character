"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PaginationbButton from "../common/paginationbButton";
import EpisodeCard, { EpisodeCardProps } from "./episodeCard";
import { useDebounce } from "use-debounce";
import { axiosInstance } from "@/lib/axios";
import SkeletonCard from "../common/skeletonCard";
import InputSearch from "../home/inputSearch";

const EpisodeContainer = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [debounceName] = useDebounce(name, 500);
  const { data: episodes, isLoading } = useQuery({
    queryKey: ["/episodes", page, debounceName],
    queryFn: async () => {
      const res = await axiosInstance.get("/episode", {
        params: {
          page,
          name: debounceName,
        },
      });
      setTotalPages(res.data.info.pages);
      return res.data.results;
    },
    retry: false,
  });
  return (
    <div>
      <img src="/portal.png" alt="logo" className="mx-auto" />
      <div className="my-4">
        <InputSearch name={name} setName={setName} />
      </div>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
            {episodes?.map((episode: EpisodeCardProps) => (
              <EpisodeCard
                key={episode?.id}
                name={episode?.name}
                air_date={episode?.air_date}
                episode={episode?.episode}
                id={episode?.id}
              />
            ))}
          </div>
          <div>
            <PaginationbButton
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default EpisodeContainer;
