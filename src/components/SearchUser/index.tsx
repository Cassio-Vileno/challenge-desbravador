"use client";

import { useState } from "react";
import PrymaryInput from "../PrymaryInput";
import {
  ButtonContainer,
  Container,
  Error,
  ImageContainer,
  NetworkContainer,
  NetworkCotent,
  ProfileContainer,
  ProfileContent,
  SeachContainer,
} from "./styles";
import UserService from "@/services/git-hub-user.service";

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
  const [user, setUser] = useState<Userprops>({} as Userprops);
  const [inputError, setInputError] = useState("");
  const handleGetUser = async (e: any) => {
    if (!e) {
      setInputError("Digite o nome de um usuario.");
      return;
    }
    try {
      setInputError("");
      const data = await UserService.getUser(e);
      setUser(data);
    } catch (error) {
      setInputError("Erro na busca por esse usuario");
      console.log(error);
    }
  };
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
      <ProfileContainer>
        <ProfileContent>
          <div>
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
          </div>
          <ButtonContainer>
            <button>Abrir perfil</button>
            <button>Abrir repositorios</button>
          </ButtonContainer>
        </ProfileContent>
      </ProfileContainer>
    </Container>
  );
}

export default SeachUser;
