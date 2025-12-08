import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type items = {
  key: string;
  value: string;
};

type SelectInputProps = {
  placeholder: string;
  items: items[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const SelectInput = ({ items, placeholder, setValue }: SelectInputProps) => {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, i) => (
          <SelectItem value={item.value} key={i}>
            {item.key}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
