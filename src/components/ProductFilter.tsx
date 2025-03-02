import Select from "react-select";

const options = [
  { value: "laptop", label: "Laptop" },
  { value: "headphones", label: "Headphones" },
  { value: "phone", label: "phone" },
];
export default function ProductFilter() {
  return (
    <Select
      isMulti
      name="productfilter"
      options={options}
      styles={{ container: (provided) => ({ ...provided, width: 400 }) }}
    />
  );
}
