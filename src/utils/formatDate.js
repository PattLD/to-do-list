import React from "react";

export const formatDate = (value) => {
  if (!value) return "";

  let date;

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    date = new Date(year, month - 1, day);
  } else {
    date = new Date(value);
  }

  if (Number.isNaN(date.getTime())) return "";

  const currentYear = new Date().getFullYear();
  const isCurrentYear = date.getFullYear() === currentYear;

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: isCurrentYear ? undefined : "2-digit",
  });
};
