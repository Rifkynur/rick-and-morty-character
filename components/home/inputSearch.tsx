import React from "react";
import { Input } from "../ui/input";

type InputSearchType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const InputSearch = ({ name, setName }: InputSearchType) => {
  return (
    <Input
      type="text"
      placeholder="Insert Name..."
      className="border-blue-400 dark:border-white"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default InputSearch;
