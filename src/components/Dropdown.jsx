import React, { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Dropdown({ icon, label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative right-0" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 bg-slate-400 px-2 py-1 rounded"
      >
        {label && (
          <span className="text-xs font-semibold text-slate-800">{label}</span>
        )}
        {icon}
      </button>
      {open && (
        <div className="absolute top-full mt-1 flex flex-col bg-sky-950 text-blue-100 text-xs rounded border border-blue-50">
          {children}
        </div>
      )}
    </div>
  );
}
