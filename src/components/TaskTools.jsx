import React from "react";
import { IoFilter } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { useState } from "react";
import { useTaskContext } from "../contexts/taskContext";

export default function TaskTools() {
  const { filter, setFilter, sort, setSort } = useTaskContext();

  const filterLabels = {
    all: null,
    completed: "Concluídas",
    pending: "Pendentes",
  };

  const sortLabels = {
    oldest: null,
    newest: "Mais recente",
    deadline_asc: "Prazo próximo",
    deadline_desc: "Prazo distante",
  };
  return (
    <div className="flex justify-end gap-2">
      <Dropdown icon={<MdOutlineSort />} label={sortLabels[sort]}>
        <DropdownItem
          label="Mais antigo"
          selected={sort === "oldest"}
          onClick={() => setSort("oldest")}
        />
        <DropdownItem
          label="Mais recente"
          selected={sort === "newest"}
          onClick={() => setSort("newest")}
        />
        <DropdownItem
          label="Prazo próximo"
          selected={sort === "deadline_asc"}
          onClick={() => setSort("deadline_asc")}
        />
        <DropdownItem
          label="Prazo distante"
          selected={sort === "deadline_desc"}
          onClick={() => setSort("deadline_desc")}
        />
      </Dropdown>
      <Dropdown icon={<IoFilter />} label={filterLabels[filter]}>
        <DropdownItem
          label="Todas"
          selected={filter === "all"}
          onClick={() => setFilter("all")}
        />
        <DropdownItem
          label="Concluídas"
          selected={filter === "completed"}
          onClick={() => setFilter("completed")}
        />
        <DropdownItem
          label="Incompletas"
          selected={filter === "pending"}
          onClick={() => setFilter("pending")}
        />
      </Dropdown>
    </div>
  );
}
