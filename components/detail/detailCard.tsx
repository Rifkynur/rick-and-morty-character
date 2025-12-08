"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

type DetailCardProps = {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species?: string;
  origin?: string;
  location: string;
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
}: DetailCardProps) => {
  const router = useRouter();
  return (
    <div className="border  rounded-lg flex flex-col md:flex-row shadow-lg md:h-[470px] lg:h-[500px]">
      <img
        src={image}
        alt="image"
        className="w-full rounded-t-lg h-80 md:rounded-l-lg md:rounded-t-none object-cover md:w-[40%] md:h-full "
      />
      <div className="p-3 bg-white flex flex-col gap-3 rounded-b-lg md:justify-between md:rounded-r-lg md:rounded-t-none w-full ">
        <div className=" pb-1">
          <p>Name:</p>
          <p className="font-bold text-lg tracking-wide font-rickAndMorty md:text-2xl">
            {name}
          </p>
        </div>
        <div className=" pb-1">
          <p>Gender:</p>
          <p className="text-lg font-rickAndMorty md:text-xl">{gender}</p>
        </div>
        <div className=" pb-1">
          <p>Status:</p>
          <p className="text-lg font-rickAndMorty md:text-xl">{status}</p>
        </div>
        <div>
          <p>Species:</p>
          <p className="text-lg  pb-1 font-rickAndMorty md:text-xl">
            {species ?? "-"}
          </p>
        </div>
        <div>
          <p>Origin:</p>
          <p className="text-lg  pb-1 font-rickAndMorty md:text-xl">
            {origin ?? "-"}
          </p>
        </div>
        <div>
          <p>Location:</p>
          <p className="text-lg font-rickAndMorty md:text-xl">
            {location ?? "-"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.back()}
            className="bg-red-500 hover:bg-red-400 cursor-pointer"
          >
            Back
          </Button>
          <Button className="cursor-pointer">Add Favorit</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
