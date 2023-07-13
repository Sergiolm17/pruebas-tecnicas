import { InterfaceBook } from "../data/interface";

export function Card({
  book,
  onClick,
  isFavorite,
  className = "h-96 w-64 object-cover",
  ...props
}: {
  book: InterfaceBook;
  key: number;
  isFavorite: boolean;
  className: string;
  onClick: (bookId: string) => void;
}) {
  return (
    <div
      {...props}
      className={`h-fit
      ${
        !isFavorite ? "border-2 border-transparent" : "border-2 border-gray-300"
      }
      rounded-md
      p-4
      `}
    >
      <button
        className={`transform transition duration-300 ease-in-out flex flex-col items-center justify-center ${
          !isFavorite ? "hover:scale-105" : "hover:scale-95"
        }
        `}
        onClick={() => onClick(book.id)}
      >
        <img className={className} src={book.cover} alt={book.title} />
        <h2>{book.title}</h2>
      </button>
    </div>
  );
}
