import React, { useEffect, useState } from "react";
import "./Filters.css";

const YearFilter = ({ dates, handleYearFilter }) => {
  const [, setSelectedYear] = useState("");
  const [years, setYears] = useState(null);

  useEffect(() => {
    setYears(dates?.map((date) => date?.toLocaleString("en-US", { year: "numeric" })));
  }, [dates]);

  return (
    <div className="year-filter">
      <div className="year-filter__control">
        {years && (
          <>
            <select
              onChange={(e) => {
                handleYearFilter(e.target.value);
                setSelectedYear(e.target.value);
              }}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {" "}
                  {year}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
    </div>
  );
};

export default YearFilter;
