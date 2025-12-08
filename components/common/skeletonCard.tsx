import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="rounded-lg w-full h-64 md:h-72"></Skeleton>
      ))}
    </div>
  );
};

export default SkeletonCard;
