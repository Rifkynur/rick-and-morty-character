"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import DetailCard from "./detailCard";

const DetailContainer = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["character"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/character/${id}`);
      return res.data;
    },
  });
  console.log(data);
  return (
    <div className="mx-auto">
      <DetailCard
        gender={data?.gender}
        id={data?.id}
        image={data?.image}
        location={data?.location?.name}
        name={data?.name}
        status={data?.status}
        origin={data?.origin?.name}
        species={data?.species}
      />
    </div>
  );
};

export default DetailContainer;
