import { bookJson } from "../data/book";
import { InterfaceBook } from "../data/interface";

export const getFields = (field: keyof InterfaceBook) => {
  let fields: string[] = [];
  bookJson.forEach((book: InterfaceBook) => {
    const value = book[field];
    if (typeof value === "string") {
      fields.push(value);
    }
  });
  fields = [...new Set(fields)];
  fields.sort();
  return fields as ReadonlyArray<(typeof fields)[number]>;
};
export const filterByGenre = (books: InterfaceBook[], genre: string) => {
  if (genre === "") return books;
  const genres = getFields("genre");
  if (!genres.includes(genre)) return [];

  const filteredBooks = books.filter(
    (book: { genre: string }) => book.genre === genre
  );
  return filteredBooks;
};
