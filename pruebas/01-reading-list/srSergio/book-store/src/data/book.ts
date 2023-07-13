import data from "../../../../books.json";
import { generateIdFromString } from "../service/utils";
import { InterfaceBook } from "./interface";

export const bookJson = data.library.map(({ book }) => ({
  ...book,
  id: generateIdFromString(book.title),
})) as InterfaceBook[];

export const getBooksByIds = (ids: string[]) => {
  ids = [...new Set(ids)];
  return bookJson.filter((book) => ids.includes(book.id));
};
