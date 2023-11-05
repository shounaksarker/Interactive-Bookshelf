"use client";
import { useState } from "react";
import axios from "axios";
import { LoadingBike } from "./Loader/LoadingBike";
import { Book } from "./Book";
import { toast } from "react-toastify";
import { SearchBar } from "./Searchbar";

export const Home = ({ className, booksDivClass }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.NEXT_PUBLIC_API}`);

      if (response.status >= 200 && response.status < 300) {
        if (response.data.totalItems < 1) {
          toast.info(
            "No books found matching your search. Perhaps try different keywords?"
          );
        }
        else {
          setSearchResults(response?.data?.items);
        }
      }
      
      else if (response.status >= 300 && response.status < 400) {
        toast.info( "This page has moved. You are being redirected. Please follow the new link.");
        // Handle redirection here, if needed
      } 
      
      else if (response.status === 429) {
        // <----- API rate limits encountered ----->
        toast.error("You've been reading too fast! Please wait a bit and try searching again.");
      }
      
      else if (response.status >= 400 && response.status < 500) {
        toast.error("Error: The request could not be fulfilled. Please check your input and try again.");
      }
      
      else if (response.status >= 500) {
        toast.error("Our digital library is currently under maintenance. Please come back later!");
      }
    }
    catch (error) {
      if (error.message.includes('Network Error')) {
        // <----- Network issues ----->
        toast.error("Looks like a connection issue. Make sure you're online and try again.");
      } else {
        // <----- Unexpected data or broken image links ----->
        toast.info("Hmm, we can't seem to get all the details for this book. Try another one?");
      }
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
