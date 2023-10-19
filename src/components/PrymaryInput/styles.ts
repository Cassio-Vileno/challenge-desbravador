"use client";

import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;
  width: 250px;

  button {
    height: 100%;
    padding-right: 10px;
    background-color: transparent;
    position: absolute;
    border: none;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const PrimearyInput = styled.input`
  background-color: var(--bg-secundary);
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);
`;

