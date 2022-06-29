export default function Dots(props) {
  return (
    <div className="flex gap-2" {...props}>
      <i className="h-3 w-3 rounded-full bg-red-400"></i>
      <i className="h-3 w-3 rounded-full bg-yellow-400"></i>
      <i className="h-3 w-3 rounded-full bg-green-400"></i>
    </div>
  );
}
