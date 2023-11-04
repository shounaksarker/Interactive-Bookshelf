import { BookshelfContext } from "@/context/BookshelfProvider";
import React, { useContext } from "react";

export const BookShelf = ({className}) => {
  const { shelf } = useContext(BookshelfContext);
  return (
    <div
      className={`relative min-h-screen border-l border-slate-500 p-2 overflow-y-scroll ${className}`}
    >
        <h3 className="text-center font-medium text-blue-900 mb-4 underline underline-offset-4">
          Books in Shelf
        </h3>
        {shelf?.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-md border border-blue-200 rounded-lg p-1 flex space-x-2 mb-3"
          >
            <img
              src={item?.volumeInfo?.imageLinks?.thumbnail}
              alt={""}
              className="object- w-[30px] h-[30px]"
            />
            <h6 className="text-xs">{item?.volumeInfo?.title}</h6>
          </div>
        ))}
    </div>
  );
};
