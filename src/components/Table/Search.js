import React, { useMemo, useState } from "react";
import {useAsyncDebounce} from "react-table";

function GlobalFilter(
  {
    globalFilter,
    setGlobalFilter,label,
  }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    console.log(value);
    setGlobalFilter(value || undefined);
  }, 200);  

  return (
    <div className="col-span-3 search_custom">
      <div className="text-gray-700">Search {label} </div>
      <input
        type="text"
        className="border p-2 rounded-lg text-[#EDEDEF]-900 text-sm"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default GlobalFilter;
