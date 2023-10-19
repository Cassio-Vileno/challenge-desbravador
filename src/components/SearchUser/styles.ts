import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const SeachContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f0f0f5;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #0D1117;

`;

export const ProfileContent = styled.div`
  display: flex;
  width: 800px;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #21262D;
  border-radius: 20px;
  color: white;  
  
  img {
    border-radius: 100%;
    width: 380px;
    height: 380px;
    border: 3px solid #30363d;
    margin-bottom: 15px;
  }

  p:first-of-type  {
    color: var(--text-dark);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  button {
    width: 205px;
    height: 50px;
    background-color: #3c444c;
    border-radius: 8px;
    font-size: 20px;
    font-family: inherit;
    color: white;
    cursor: pointer;
  }
`;

export const NetworkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
`;

export const NetworkCotent = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #3c444c;
  justify-content: center;
  align-items: center;
  background-color: #30363d;

  h4 {
    color: white;
  }
`;


