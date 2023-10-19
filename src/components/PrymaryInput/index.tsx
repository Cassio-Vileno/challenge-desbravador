"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { ContainerInput, PrimearyInput } from "./styles";
import SearchIcon from "../svg/searchIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: string) => void;
}

function PrymaryInput(props: InputProps) {
  const [search, setSearch] = useState("");

  return (
    <ContainerInput>
      <PrimearyInput
        onChange={(event) => setSearch(event.target.value)}
        {...props}
      />
      <button onClick={() => props.handleChange(search)}>
        <SearchIcon />
      </button>
    </ContainerInput>
  );
}

export default PrymaryInput;
