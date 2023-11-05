"use client";
import { BookShelf } from "@/components/BookShelf";
import { Home } from "@/components/Home";
import { BookshelfContext } from "@/context/BookshelfProvider";
import { useContext } from "react";

export default function HomePage() {
  const { shelf } = useContext(BookshelfContext);
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between ">
      {/*  <----- showing All Books -----> */}
      <Home className={`${shelf?.length > 0
            ? "w-full md:w-[70%] lg:w-[60%] xl:w-[70%]"
            : "w-full"
        }`}
        booksDivClass={`${shelf?.length > 0
          ? "md:gap-5 lg:gap-10"
          : "md:gap-2 xl:gap-5"
        }`}
      />

      {/*  <----- selected book showing in shelf -----> */}
      <BookShelf className={`${shelf.length > 0
            ? "w-full md:w-[27%] lg:w-[38%] xl:w-[27%]"
            : "hidden"
        }`}
      />
    </div>
  );
}
