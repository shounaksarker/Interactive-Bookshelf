"use client";
import { useState } from "react";
import axios from "axios";
import { SearchBar } from "../components/SearchBar";
import { LoadingBike } from "./Loader/LoadingBike";
import { Book } from "./Book";
import { toast } from "react-toastify";

export const Home = ({className,booksDivClass}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const searchBooks = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB-53H4t8SR9OalN5Yq9TtfUM2TYSVZLcU`
      );
      setSearchResults(response.data.items);
      if(response?.data?.totalItems<1){
        toast.error('No Books Found')
      }
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-4 flex flex-col items-center space-y-4 ${className}`}>
      <h1 className="text-xl font-bold">Book Search</h1>
      <SearchBar onSearch={searchBooks} />
      {loading && <LoadingBike />}

      <div className={`flex flex-col items-start flex-wrap md:flex-row  gap-5 md:justify-center !mt-16 ${booksDivClass}`}>
        {searchResults?.map((book, index) => (
          <Book book={book} key={index} />
        ))}
      </div>
    </div>
  );
};
