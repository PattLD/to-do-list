import React, { useState } from "react";
import { MdCalendarToday} from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import TextareaAutosize from 'react-textarea-autosize';

export default function Task({
  id,
  description,
  concluded,
  onToggle,
  onDelete,
  onUpdate,
}) {
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [newDescription, setNewDescription] = useState(description || "");

  const handleSave = async (newDescription) => {
    onUpdate(newDescription);
    setIsEditingTask(false);
  };

  const handleCancel = () => {
    setIsEditingTask(false);
    setNewDescription(description || "");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave(newDescription);
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  //styles
  const descriptionTaskStyles =
    "text-justify text-xs font-semibold text-slate-700 cursor-pointer text-wrap size-full hover:text-slate-500";

  return (
    // div 1 (col 5)
    <div
      key={id}
      className="grid grid-cols-12 border rounded p-2 border-indigo-300 bg-slate-50"
    >
      <div className="flex justify-center items-center col-span-1">
        <input
          className="block-4"
          checked={concluded}
          type="checkbox"
          onChange={onToggle}
        />
      </div>

      {/* div 2 */}
      <div className="col-span-11 flex flex-col justify-between gap-1">
        {/* div 3 */}
        <div className="flex justify-between items-start gap-2">
          {isEditingTask ? (
            <>
              <TextareaAutosize
                className={`${descriptionTaskStyles} resize-none cursor-text`}
                type="text"
                placeholder="Digite a tarefa"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                onBlur={handleCancel}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </>
          ) : (
            <>
              <div
                className={`${descriptionTaskStyles}`}
                onClick={() => setIsEditingTask(true)}
              >
                {description}
              </div>
            </>
          )}
          <button className="p-1 text-slate-600 hover:text-indigo-600 hover:cursor-pointer" onClick={onDelete}>
            <TiDelete size={15}/>
          </button>
        </div>
        {/* div 4 */}
        <div className="">
          <MdCalendarToday className="bg-slate-300 border border-slate-300 text-slate-700 p-0.5 rounded w-6 h-4 hover:bg-slate-200 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}
