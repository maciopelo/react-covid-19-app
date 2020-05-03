import React from "react";
import "../styles/SearchPanel.css";

const SearchPanel = (props) => {
  const countries = props.countries.Countries.map((item) => (
    <option key={item.CountryCode} value={item.Country}>
      {item.Country}
    </option>
  ));
  return (
    <div className="search-panel">
      <select
        placeholder="Search country..."
        list="countries"
        value={props.chosenCountry}
        onChange={props.handleCountryChange}
      >
        {countries}
      </select>
      <button onClick={props.searchStats}>Szukaj</button>
    </div>
  );
};

export default SearchPanel;
