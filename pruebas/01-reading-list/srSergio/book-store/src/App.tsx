import { useEffect, useState } from "react";
import { bookJson } from "./data/book";
import { filterByGenre } from "./service/filter";
import { Card } from "./components/Card";
import Filter from "./components/Filter";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { useLocalStorage } from "./hook/useLocalStorage";

function App() {
  const [books, setBooks] = useState(bookJson);
  const [genre, setGenre] = useState<string>("");
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage<string[]>(
    "favoriteBooks",
    []
  );

  useEffect(() => {
    const filteredBooks = filterByGenre(bookJson, genre);
    setBooks(filteredBooks);
  }, [genre]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBookClick = (bookId: string) => {
    if (favoriteBooks.includes(bookId)) {
      setFavoriteBooks((prev: string[]) =>
        prev.filter((book) => book !== bookId)
      );
      return;
    }
    setFavoriteBooks((prev: string[]) => [bookId, ...prev]);
  };

  return (
    <>
      <Sidebar
        data={favoriteBooks}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onClick={(bookId: string) => handleBookClick(bookId)}
      />
      <button
        className="z-10 fixed top-0 left-0 m-4 p-2 bg-gray-900 text-white rounded-md"
        onClick={toggleSidebar}
      >
        Lista de lectura <strong>{favoriteBooks.length}</strong>
      </button>

      <div className="m-0 flex flex-col items-center justify-center min-w-screen min-h-screen min-w-3 sm:p-12 p-5 gap-y-6">
        <h1 className="text-6xl font-bold break-words">Tienda de Libros</h1>
        <Filter value={genre} onChange={(genre: string) => setGenre(genre)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-fit">
          {books.map((book) => (
            <Card
              className="h-96 w-64 object-cover"
              isFavorite={favoriteBooks.includes(book.id)}
              book={book}
              onClick={handleBookClick}
              key={parseInt(book.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
