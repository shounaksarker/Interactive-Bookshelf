"use client";
import React, { useContext, useState } from "react";
import {Modal} from "./Modal";
import axios from "axios";
import { LoadingSpin } from "./Loader/LoadingSpin";
import { BookshelfContext } from "@/context/BookshelfProvider";
import { toast } from "react-toastify";

export const Book = ({ book }) => {
    const [loading, setLoading] = useState(false);
    const [singleBookInfo, setSingleBookInfo] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const {shelf, setShelf} = useContext(BookshelfContext)
    const { authors, imageLinks, title } = book?.volumeInfo;

  const singleBookData = async (link) => {
    try {
      setLoading(true);
      const response = await axios.get(link);
      setSingleBookInfo(response?.data?.volumeInfo);
    } catch (error) {
      console.error("Error searching book:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToBookshelf = (newBook) => {
    if (shelf.find((b) => b.id === newBook.id)) {
      toast.error('This book is already taken.!!',{autoClose: 2000,})
    } else {
      setShelf((prevBooks) => [...prevBooks, newBook]);
      toast.success('This book is added to your bookshelf.!!',{autoClose: 1700,})
    }
  };


  return (
    <div className="w-60 border border-slate-200 rounded-lg p-1 flex flex-col space-y-2 justify-between h-[330px] shadow-md overflow-y-scroll">
      <img
        src={imageLinks ? imageLinks?.thumbnail : process.env.NEXT_PUBLIC_BOOKCOVER}
        alt={title}
        className="object-contain w-full max-h-[180px]"
      />
      <div className="text-center flex flex-col gap-y-2">
        <h2 className="font-bold text-blue-800">{title}</h2>
        <h5 className="font-medium text-sm">
          {authors?.map((athr, i) => (
            <span key={i}>
              {athr}
              {i + 1 < authors.length && ", "}
            </span>
          ))}
        </h5>
      </div>
      <div className="flex justify-between items-center">
        {loading ? (
          <div className="rounded-lg bg-blue-500 text-white px-3 py-1 text-xs">
            <LoadingSpin />
          </div>
        ) : (
          <button
            onClick={() => {
              setModalOpen(true);
              singleBookData(book?.selfLink);
            }}
            className={`rounded-lg bg-blue-500 text-white px-3 py-1 text-xs`}
          >
            Details
          </button>
        )}
        <button onClick={()=>addToBookshelf(book)} className="rounded-lg bg-green-500 text-white px-3 py-1 text-xs">
          Add to Bookshelf
        </button>
      </div>
      {singleBookInfo && (
        <Modal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          singleBookInfo={singleBookInfo}
          setSingleBookInfo={setSingleBookInfo}
        />
      )}
    </div>
  );
};
