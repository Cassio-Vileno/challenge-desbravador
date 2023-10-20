import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-color: #0D1117;
`;

export const RepositoriesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 80vh;
  border-radius: 15px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
  background: #3c444c;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 175px;
  height: 35px;

  button {
    font-family: '__Saira_2a22a9', '__Saira_Fallback_2a22a9';
    border: none;
    background: #7a7a7a00;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
`;

export const PriorityFilter = styled.ul`
  position: absolute;
  padding: 12px 16px;
  z-index: 999;
  
  list-style: none;

  border-radius: 4px;
  background:#FFF;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);

  top: 100%;
  right: 8px;

  li {
    color: var(--text-dark);
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export const FilterBar = styled.div`
 width: 83%;
 display: flex;
 justify-content: space-between;
`;