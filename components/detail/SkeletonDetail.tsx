import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonDetail = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <Skeleton className="w-full h-40 " />
      <Skeleton className="w-full h-40 " /> */}
      <img src="/Loading.svg" alt="loading" className="animate-pulse" />
      <h1 className="font-rickAndMorty text-5xl animate-pulse">Wait...</h1>
    </div>
  );
};

export default SkeletonDetail;
