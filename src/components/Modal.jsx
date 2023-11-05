import React, { useEffect, useRef, useState } from "react";

export const Modal=({
  isModalOpen,
  setModalOpen,
  singleBookInfo,
  setSingleBookInfo,
}) =>{
  const { authors, imageLinks, title, description } = singleBookInfo;
  const closeModal = () => {
    setModalOpen(false);
    setSingleBookInfo([]);
  };

  //   convert response to normal html
  const domParser = (des) => {
    const htmlContent = des;
    const parser = new DOMParser();
    // Parse the HTML content
    const doc = parser.parseFromString(htmlContent, "text/html");
    // Get all <p> elements
    const paragraphs = doc.getElementsByTagName("p");
    
    let finalText = "";
    for (let i = 0; i < paragraphs.length; i++) {
      const text = paragraphs[i].textContent;
      finalText += `${text}\n\n`;
    }
    return finalText || des;
  };

  // handle click outside for closing modal
  const inputRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isModalOpen &&
    title &&  (
      <div className="fixed flex items-center justify-center z-50" >
        {/* Modal overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[6px]" ref={inputRef}>
          <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-[60%] overflow-y-scroll">
            <div className="flex items-start space-x-4 max-h-[500px]" >
              {/* book cover / image  */}
              <img
                src={imageLinks?.thumbnail || process.env.NEXT_PUBLIC_BOOKCOVE}
                alt={title}
                className="object-fill w-full"
              />
              {/* ititle-author  */}
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-2">
                  <h2 className="text-blue-900 font-bold pr-3">{title}</h2>
                  <h2 className="text-sm font-medium">
                    Authors:{" "}
                    {authors?.map((athr, i) => (
                      <span key={i}>
                        {athr}
                        {i + 1 < authors.length && ", "}
                      </span>
                    ))}
                  </h2>
                </div>
                {/* description  */}
                <div className="whitespace-pre-line text-justify	">
                  {domParser(description)}
                </div>
              </div>
            </div>

            <button
              className="mt-4 bg-red-500 text-white px-2 py-1 rounded-lg absolute top-0 right-0"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  );
}

