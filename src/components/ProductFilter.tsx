import Select, { MultiValue } from "react-select";

const options = [
  { value: "laptop", label: "Laptop" },
  { value: "headphones", label: "Headphones" },
  { value: "phone", label: "phone" },
];
export default function ProductFilter({
  handleChange,
  id,
}: {
  handleChange: (e: MultiValue<{ value: string; label: string }>) => void;
  id?: string;
}) {
  return (
    <Select
      isMulti
      name="productfilter"
      options={options}
      styles={{ container: (provided) => ({ ...provided, width: 400 }) }}
      onChange={handleChange}
      id={id}
    />
  );
}
