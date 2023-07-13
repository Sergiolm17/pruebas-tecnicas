import React from "react";
import { getBooksByIds } from "../data/book";
import { Card } from "./Card";

interface SidebarProps {
  isOpen: boolean;
  data: string[];
  onClose: () => void;
  onClick: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  data,
  onClick,
}) => {
  const books = getBooksByIds(data);
  return (
    <div
      className={`z-20 fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto overflow-x-hidden `}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Lista de Favoritos</h1>
        <button
          className="text-gray-500 hover:text-white focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 0 0-1.414 1.414L8.586 11l-3.707 3.293a1 1 0 1 0 1.414 1.414L10 12.414l3.293 3.707a1 1 0 0 0 1.414-1.414L11.414 11l3.293-3.293a1 1 0 0 0-1.414-1.414L10 9.586 6.707 6.293z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`px-4 py-2 flex
      flex-col items-center justify-items-start
      min-w-screen min-h-screen min-w-3
      gap-4
      `}
      >
        {books.map((book) => (
          <Card
            className="h-52 w-36 object-cover"
            book={book}
            key={parseInt(book.id)}
            onClick={onClick}
            isFavorite={true}
          />
        ))}
        {/* Agrega aquí tus enlaces del sidebar */}
      </div>
    </div>
  );
};
