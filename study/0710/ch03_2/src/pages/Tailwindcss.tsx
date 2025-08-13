import * as D from "../data";

export default function Tailwindcss() {
  return (
    <div className="bg-blue-500/70">
      <p className="w-1/4 p-16 text-lg text-blue-500">Tailwindcss</p>
      <p className="italic text-gray-50 line-clamp-1">
        {D.randomParagraphs(10)}
      </p>
      <button className="btn btn-primary" style={{ textTransform: "none" }}>
        Button
      </button>
    </div>
  );
}
