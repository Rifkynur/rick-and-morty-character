"use client";
import { useState } from "react";
import CharacterCard from "../common/characterCard";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import InputSearch from "./inputSearch";
import SelectInput from "./selectInput";
import { Value } from "@radix-ui/react-select";

const CharacterContainer = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["/characters", page, name, status],
    queryFn: async () => {
      const res = await axiosInstance.get("/character", {
        params: {
          page,
          name,
          gender,
          status,
        },
      });
      return res.data.results;
    },
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
      <div className="mb-4 md:mb-8">
        <InputSearch name={name} setName={setName} />
        <div>
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
    </div>
  );
};

export default CharacterContainer;
