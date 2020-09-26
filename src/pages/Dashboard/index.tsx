import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/28688721?s=460&u=9ba9e7217b90411786b435e86cead7b79df013d2&v=4"
          alt="Murilo Henzo"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>bla bla bla bla</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/28688721?s=460&u=9ba9e7217b90411786b435e86cead7b79df013d2&v=4"
          alt="Murilo Henzo"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>bla bla bla bla</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/28688721?s=460&u=9ba9e7217b90411786b435e86cead7b79df013d2&v=4"
          alt="Murilo Henzo"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>bla bla bla bla</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
