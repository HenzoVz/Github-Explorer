import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={20} />
          Voltar
        </Link>

      </Header>

      <RepositoryInfo>
          <header>
            <img />
            <div>
              <strong>title repository</strong>
              <p>description</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>1080</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>49</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>78</strong>
              <span>Issues</span>
            </li>
          </ul>
      </RepositoryInfo>

      <Issues>
        <Link to= "oaidjaod">
          <div>
            <strong>issue.title</strong>
            <p>issue.user.login</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
