import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const SeachContainer = styled.div`
  display: flex;
  flex: 1;
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
  width: 60%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #0D1117;
`;

export const ProfileContent = styled.div`
  display: flex;
  width: 350px;
  height: 420px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #21262D;
  border-radius: 20px;
  color: white; 

  img {
    border-radius: 100%;
    width: 150px;
    height: 150px;
    border: 3px solid #30363d;
    margin-bottom: 15px;
  }

  p:first-of-type  {
    color: var(--text-dark);
  }

  @media (min-width:  992px) {
    width: 450px;
    height: 550px;

    img {
      width: 200px;
      height: 200px;
    }

  }

  @media (min-width:  1200px) {
    width: 580px;
    height: 700px;

    img {
      width: 250px;
      height: 250px;
    }

  }
`;

export const Profile = styled.div`
  max-width: 300px;

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 13px;
  }

  @media (min-width:  992px) {
    max-width: 400px;

    p {
      font-size: 16px;
    }

    h3 {
    font-size: 18px;
  }
  }
  
  @media (min-width:  1200px) {
    max-width: 400px;

    p {
      font-size: 16px;
    }

    h3 {
    font-size: 22px;
  }
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
    width: 155px;
    height: 35px;
    border: none;
    background-color: var(--bg-primary);
    border-radius: 8px;
    font-size: 15px;
    font-family: inherit;
    color: white;
    cursor: pointer;
  }

  a {
    display: flex;
    width: 155px;
    height: 35px;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-primary);
    font-size: 15px;
    border-radius: 8px;
    text-decoration: none;
    font-family: inherit;
    color: white;
    cursor: pointer;
  }

  @media (min-width:  992px) {
    max-width: 400px;

   a {
    width: 205px;
    height: 50px;
    font-size: 18px;
   }

   button {
    width: 205px;
    height: 50px;
    font-size: 18px;
   }
  }
`;

export const NetworkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  gap: 20px;

  @media (min-width:  992px) {
   margin: 20px 0;
  }
`;

export const NetworkCotent = styled.div`
  width: 150px;
  height: 35px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #3c444c;
  justify-content: center;
  align-items: center;
  background-color: #30363d;
  
  h4 {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }

  @media (min-width:  992px) {
    width: 200px;
    height: 50px;

    h4 {
      font-size: 16px;
    }
  }
`;


