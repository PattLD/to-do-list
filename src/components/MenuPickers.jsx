import React from "react";
import AttributePicker from "./AttributePicker";
import { MdCalendarToday } from "react-icons/md";
import { formatDate } from "../utils/formatDate";
import Modal from "./Modal";
import { useState } from "react";
import { useTaskContext } from "../contexts/taskContext";

export default function MenuPickers({ id, dueDate }) {
  const [showModal, setShowModal] = useState(false);
  const [newDue, setNewDue] = useState(dueDate || "");
  const { updateDue } = useTaskContext();
  return (
    <div>
      <AttributePicker
        icon={<MdCalendarToday />}
        value={formatDate(dueDate)}
        isOpen={() => setShowModal(true)}
      />

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => updateDue(id, newDue)}
      >
        <input
          className="text-sm bg-slate-200 p-2 rounded border border-slate-300 cursor-pointer"
          type="date"
          value={newDue}
          onChange={(e) => setNewDue(e.target.value)}
        />
      </Modal>
    </div>
  );
}
