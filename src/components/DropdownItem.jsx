export default function DropdownItem({ selected, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded text-left hover:bg-sky-700
        ${selected ? "bg-sky-700 font-semibold" : ""}
      `}
    >
      {label}
    </button>
  );
}
