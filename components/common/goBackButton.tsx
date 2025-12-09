"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-3 mb-4 font-bold cursor-pointer"
      onClick={() => router.back()}
    >
      <MoveLeft />
      <p>Go Back</p>
    </div>
  );
};

export default GoBackButton;
