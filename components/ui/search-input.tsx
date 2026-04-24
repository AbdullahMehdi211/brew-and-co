"use client";

import { useState } from "react";

export interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  placeholder = "Search...",
  className = "",
}: SearchInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={["relative flex items-center", className].join(" ")}>
      <svg
        className="absolute left-4 w-4 h-4 text-espresso/40 pointer-events-none transition-colors duration-150"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={[
          "h-10 pl-10 pr-4 rounded-full font-body text-sm text-espresso",
          "placeholder:text-espresso/40 bg-milk/80 border",
          "focus:outline-none transition-all duration-200",
          focused
            ? "border-caramel/50 ring-2 ring-caramel/10 w-56"
            : "border-espresso/10 w-44",
        ].join(" ")}
      />
    </div>
  );
}
