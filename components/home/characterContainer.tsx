"use client";
import { useState } from "react";
import CharacterCard from "../common/characterCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import InputSearch from "./inputSearch";
import SelectInput from "./selectInput";
import { useDebounce } from "use-debounce";
import PaginationbButton from "./paginationbButton";
import SkeletonCard from "../common/skeletonCard";

const CharacterContainer = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState("");
  const [debounceName] = useDebounce(name, 500);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["/characters", page, debounceName, status, gender],
    queryFn: async () => {
      const res = await axiosInstance.get("/character", {
        params: {
          page,
          name: debounceName,
          gender,
          status,
        },
      });
      setTotalPages(res.data.info.pages);
      return res.data.results;
    },
    retry: false,
  });

  const statusInput = [
    { key: "all", value: " " },
    { key: "dead", value: "dead" },
    { key: "alive", value: "alive" },
    { key: "unknown", value: "unknown" },
  ];
  const genderInput = [
    { key: "all", value: " " },
    { key: "male", value: "male" },
    { key: "female", value: "female" },
    { key: "genderless", value: "genderless" },
    { key: "unknown", value: "unknown" },
  ];
  return (
    <div className="mt-4 md:mt-8">
      <div className="mb-4 md:mb-8 flex flex-col gap-2 md:flex-row">
        <InputSearch name={name} setName={setName} />
        <div className="flex items-center gap-1">
          <SelectInput
            placeholder="status"
            setValue={setStatus}
            items={statusInput}
          />
          <SelectInput
            placeholder="gender"
            setValue={setGender}
            items={genderInput}
          />
        </div>
      </div>
      {isLoading && <SkeletonCard />}

      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {data?.map((dat: any) => (
          <CharacterCard
            key={dat.id}
            id={dat.id}
            name={dat.name}
            image={dat.image}
            location={dat.location.name}
            status={dat.status}
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
    </div>
  );
};

export default CharacterContainer;
