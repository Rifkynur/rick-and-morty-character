import React from "react";

const Empty = ({ msg }: { msg: string }) => {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center gap-4">
      <img src="/empty.png" alt="empty" />
      <h1 className="text-2xl font-rickAndMorty font-bold">{msg}</h1>
    </div>
  );
};

export default Empty;
