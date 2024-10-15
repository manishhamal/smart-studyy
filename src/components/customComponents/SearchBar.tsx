import { Button } from "@/components/ui/button";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ value, setValue }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);
  return (
    <div>
      <div className="flex mr-24 items-center mt-8 bg-white shadow-lg p-2 border border-red-800 rounded-lg w-[500px]">
        <IoSearch />

        <input
          type="text"
          placeholder="Input your search here....."
          className="p-2 rounded-lg outline-none grow block"
          value={value}
          onChange={handleInputChange}
        />
        <Button className="">Search</Button>
      </div>
      <div>
        <h1>  
          {}
          {value}
        </h1>
      </div>
    </div>
  );
};

export default SearchBar;
