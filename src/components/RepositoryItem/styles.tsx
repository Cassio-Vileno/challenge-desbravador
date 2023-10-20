import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  border-bottom: 1px solid #30363d;
  color: white;
  padding: 0 15px;

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    background-color: #30363d;
    padding: 5px 15px;
    border-radius: 8px;
    font-family: inherit;
  }

  p {
    color: var(--text-dark);
  }
`;
