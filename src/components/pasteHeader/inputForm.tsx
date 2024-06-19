"use client";
import { FormEvent, useEffect, useState } from "react";

export const InputForm = () => {
  const [domain, setDomain] = useState<string>("");
  const [valueSearch, setValueSearch] = useState("");
  useEffect(() => {
    if (window) setDomain(window.location.origin);
  }, []);

  const handleSubmit = (p: FormEvent) => {
    p.preventDefault();
    if (valueSearch !== "") {
      const url = encodeURIComponent(valueSearch);

      window.location.href = `${domain}/pesquisa/${url}`;
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex-1 w-full">
      <input
        autoComplete="off"
        
        name="s"
        type="search"
        className="w-full py-1.5 pr-1.5 flex-1 outline-none bg-transparent"
        placeholder="Buscar"
        value={valueSearch}
        onChange={(e) => setValueSearch(e.currentTarget.value)}

      />
    </form>
  );
};
