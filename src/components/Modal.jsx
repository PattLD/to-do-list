import React from "react";

export default function Modal({ isOpen, onClose, onSave, children }) {
  if (!isOpen) return null;

  const handleOnSave = () => {
    onSave();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-indigo-200 p-6 w-fit max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-slate-700">Alterar Prazo</h2>
          {children}
          <div className="flex gap-2 justify-end">
            <button
              className="px-3 py-2 text-xs border border-slate-700 rounded hover:bg-slate-100 cursor-pointer"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="px-3 py-2 text-xs bg-slate-700 text-white font-semibold rounded hover:bg-slate-500 cursor-pointer"
              onClick={handleOnSave}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
