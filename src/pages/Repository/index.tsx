import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';
import { AxiosResponse } from 'axios';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  const urls = [api.get(`repos/${params.repository}`),
                api.get(`repos/${params.repository}/issues`)
  ]

  useEffect(() => {

    //#1
    async function loadData(): Promise<void> {
      const [repo, iss] = await Promise.all(urls)

      setRepository(repo.data);
      setIssues(iss.data);
    }
    loadData();

    // //#2
    // api.get(`repos/${params.repository}`).then((response) => {
    //   setRepository(response.data)
    // });

    // api.get(`repos/${params.repository}/issues`).then((response) => {
    //   setIssues(response.data)
    // });

  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={20} />
          Voltar
        </Link>

      </Header>
      { repository && (
          <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
      </RepositoryInfo>
      )}

      {issues.map((issue) => (
        <Issues>
          <Link key={issue.id} to={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        </Issues>
      ))}
    </>
  );
};

export default Repository;
