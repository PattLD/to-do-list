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
  };
  return (
    <div className="flex justify-end mx-4 gap-2">
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
