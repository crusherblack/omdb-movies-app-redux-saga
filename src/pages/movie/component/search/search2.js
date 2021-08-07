import React, { useState, useEffect } from "react";

import { api, apiKey } from "utils/api";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

const SuggestionsList = (props) => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion,
  } = props;

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => {
            const isSelected = selectedSuggestion === index;
            const classname = `suggestion ${isSelected ? "selected" : ""}`;
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>No suggestions available...</div>;
    }
  }
  return <></>;
};
const Autocomplete = ({ searchMovie }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);

  const searchValue = useDebounce(inputValue, 500);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api(`?apikey=${apiKey}&s=${inputValue}`);
        const filteredResponse = response.data.Search.map(
          (movie) => movie.Title
        );

        const filteredSuggestions = filteredResponse.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredSuggestions(filteredSuggestions);
        setDisplaySuggestions(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (!fetchAgain) return;

    getData();
  }, [searchValue]);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFetchAgain(true);
  };

  const onSelectSuggestion = (index) => {
    setSelectedSuggestion(index);
    setInputValue(filteredSuggestions[index]);
    setFetchAgain(false);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
    searchMovie(filteredSuggestions[index]);
  };

  return (
    <div class="form-group">
      <h3 className="text-center text-white">Auto Suggestions (not stable)</h3>
      <input
        className="search form-control"
        type="text"
        onChange={onChange}
        value={inputValue}
      />
      <SuggestionsList
        inputValue={inputValue}
        selectedSuggestion={selectedSuggestion}
        onSelectSuggestion={onSelectSuggestion}
        displaySuggestions={displaySuggestions}
        suggestions={filteredSuggestions}
      />
    </div>
  );
};
export default Autocomplete;
