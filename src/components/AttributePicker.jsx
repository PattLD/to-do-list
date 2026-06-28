import React from "react";

export default function AttributePicker({ icon, value, isOpen }) {
  return (
    <div
      onClick={isOpen}
      className="flex items-center gap-1 justify-center w-fit bg-slate-300 border border-slate-300 text-slate-600 p-1 rounded hover:bg-slate-200 cursor-pointer text-xs font-semibold"
    >
      {icon}
      {value}
    </div>
  );
}
