import { Container } from "./styles";

interface RepositoryItem {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

function RepositoryItem({
  description,
  language,
  name,
  stargazers_count,
  html_url,
}: RepositoryItem) {
  return (
    <Container>
      <div>
        <h2>{name}</h2>
        <p>{language}</p>
        <p>{description}</p>
      </div>

      <div>
        <strong>⭐{stargazers_count}</strong>
        <a href={html_url} target="_blank">
          Abrir
        </a>
      </div>
    </Container>
  );
}

export default RepositoryItem;
