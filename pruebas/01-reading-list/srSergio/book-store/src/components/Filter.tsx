import { getFields } from "../service/filter";

export default function Filter({
  onChange,
  value,
}: {
  onChange: (genre: string) => void;
  value: string;
}) {
  const genres = getFields("genre");

  return (
    <select
      className="border border-gray-300 rounded-md p-4 text-xl"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Todos</option>
      {genres.map((genre, index) => (
        <option key={index}>{genre}</option>
      ))}
    </select>
  );
}
