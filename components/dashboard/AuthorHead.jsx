export default function AuthorHead({ name }) {
  return (
    <th className="border-b-2 border-secondary-200 bg-secondary-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-secondary-600">
      {name}
    </th>
  );
}
