import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SearchOptions } from "../types";
import { searchAPI } from "../api/search/search";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

interface SearchResult {
  id?: string | number;
  name?: string;
  type?: "dish" | "restaurant";
  image?: string;
}

const SearchBar = ({
  placeholder = "What do you want eat today...",
  className,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearchChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      if (value.length > 2) {
        setIsSearching(true);
        setShowResults(true);

        const searchReq: SearchOptions = { query: value };
        const searchResults = await searchAPI(searchReq);
        setResults(searchResults);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (result:SearchResult)=>{
    clearSearch();
    if(result?.type === 'restaurant'){
        navigate(`/restaurants/${result?.id}`)
    }
    else if(result.type === 'dish'){
        // display modal or navigate to dish
    }

  }

  const clearSearch = () => {
    setQuery("");
    setIsSearching(false);
    setResults([]);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-white w-80 p-3 pl-10 pr-10 text-sm rounded-lg
             focus:outline-none focus:ring-2 focus:ring-primary"
          value={query}
          onChange={handleSearchChange}
          placeholder={placeholder}
        />
        {query && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={clearSearch}
          >
            <XMarkIcon className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>
      {showResults && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">Searching..</div>
          ) : results?.length > 0 ? (
            <ul className="py-2">
              {results.map((result) => (
                <li
                  key={`${result.type}-${result.id}`}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={()=> handleResultClick(result)}
                >
                  <div>
                    <p className="font-medium">{result.name}</p>
                    <p className="text-xs text-gray-500 capitalize">
                      {result.type}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : query.length > 2 ? (
            <div className="p-4 text-center text-gray-500">
              No results found for "{query}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
