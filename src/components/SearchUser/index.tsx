"use client";

import { useEffect, useState } from "react";
import PrymaryInput from "../PrymaryInput";
import {
  ButtonContainer,
  Container,
  Error,
  ImageContainer,
  NetworkContainer,
  NetworkCotent,
  Profile,
  ProfileContainer,
  ProfileContent,
  SeachContainer,
} from "./styles";
import UserService from "@/services/git-hub-user.service";
import { useRouter } from "next/navigation";

interface Userprops {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: string;
  following: string;
  html_url: string;
}

function SeachUser() {
  const [user, setUser] = useState<Userprops>();
  const [inputError, setInputError] = useState("");
  const router = useRouter();
  const handleGetUser = async (userName: any) => {
    if (!userName) {
      setInputError("Digite o nome de um usuario.");
      return;
    }
    try {
      setInputError("");
      const data = await UserService.getUser(userName);
      setUser(data);
      if (userName !== data.login) {
        localStorage.setItem("user-github", userName);
      }
    } catch (error) {
      setInputError("Erro na busca por esse usuario");
      console.log(error);
    }
  };

  const handleNavigate = () => {
    router.push("/repositories");
  };

  useEffect(() => {
    const login = localStorage.getItem("user-github");
    handleGetUser(login);
  }, []);

  return (
    <Container>
      <SeachContainer>
        <h2>Busque por um usuario</h2>
        <PrymaryInput
          handleChange={(value) => handleGetUser(value)}
          placeholder="Nome"
        />
        {inputError && <Error>{inputError}</Error>}
      </SeachContainer>
      {user && (
        <ProfileContainer>
          <ProfileContent>
            <Profile>
              <ImageContainer>
                <img src={user.avatar_url} alt="Avatar de perfil" />
              </ImageContainer>
              <h3>{user.name}</h3>
              <p>{user.login}</p>
              <NetworkContainer>
                <NetworkCotent>
                  <h4>Seguidores: {user.followers}</h4>
                </NetworkCotent>
                <NetworkCotent>
                  <h4>Seguindo: {user.following}</h4>
                </NetworkCotent>
              </NetworkContainer>
              <p>{user.bio}</p>
            </Profile>
            <ButtonContainer>
              <a href={`https://github.com/${user.login}`} target="_blank">
                Abrir perfil
              </a>
              <button onClick={() => handleNavigate()}>
                Abrir repositorios
              </button>
            </ButtonContainer>
          </ProfileContent>
        </ProfileContainer>
      )}
    </Container>
  );
}

export default SeachUser;
