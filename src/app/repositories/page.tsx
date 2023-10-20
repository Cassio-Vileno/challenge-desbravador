"use client";

import { useEffect, useState } from "react";
import {
  Container,
  FilterContainer,
  Header,
  PriorityFilter,
  RepositoriesContent,
  FilterBar,
} from "./styles";
import RepositoryItem from "@/components/RepositoryItem";
import RepositoryService from "@/services/git-repository.service";
import { PriorityTypes } from "@/types/priorityTypes";
import ArrowIcon from "@/components/svg/ArrowIcon";
import BackButton from "@/components/BackButton";
import { useInfos } from "@/hooks/useInfos";

interface Userprops {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: string;
  following: string;
  html_url: string;
}

interface RepositoryItemProps {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  owner: {
    login: string;
  };
}

function Repositories() {
  const [repositories, setRepositories] = useState([{} as RepositoryItemProps]);
  const [filterRepos, setFilterRepos] = useState([{} as RepositoryItemProps]);
  const { userName } = useInfos();
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen((prev) => !prev);
  const handleUpdatepriority = (value: PriorityTypes) => {
    if (value === 0) {
      setFilterRepos(repositories);
    }
    if (value === 1) {
      const sortedRepos = repositories.sort(
        (a, b) => a.stargazers_count - b.stargazers_count
      );
      setFilterRepos(sortedRepos);
    }
    if (value === 2) {
      const sortedRepos = repositories.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
      setFilterRepos(sortedRepos);
    }
    handleOpen();
  };

  const getRepositories = async (userName: string) => {
    try {
      const data = await RepositoryService.getRepositories(userName);
      setRepositories(data);
      setFilterRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userName) {
      getRepositories(userName);
    }
  });

  return (
    <Container>
      <Header>
        <h1>Repositorios de {userName}</h1>
      </Header>
      <FilterBar>
        <BackButton />
        <FilterContainer>
          <button onClick={handleOpen}>
            Organizar por <ArrowIcon />
          </button>

          {isOpen && (
            <PriorityFilter>
              <li onClick={() => handleUpdatepriority(PriorityTypes.NORMAL)}>
                Organizar por
              </li>
              <li onClick={() => handleUpdatepriority(PriorityTypes.GROWING)}>
                Crescente
              </li>
              <li
                onClick={() => handleUpdatepriority(PriorityTypes.DESCENDING)}
              >
                Decrescente
              </li>
            </PriorityFilter>
          )}
        </FilterContainer>
      </FilterBar>
      <RepositoriesContent>
        <ul>
          {repositories.map((item) => (
            <RepositoryItem
              description={item.description}
              language={item.language}
              name={item.name}
              stargazers_count={item.stargazers_count}
              html_url={item.html_url}
              key={item.name}
            />
          ))}
        </ul>
      </RepositoriesContent>
    </Container>
  );
}

export default Repositories;
