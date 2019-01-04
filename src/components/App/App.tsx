import React from 'react';
import style from './app.st.css';
import { Content } from '../Content/Content';
import { Header } from '../Header/Header';
import '../project.st.css';

export interface IAppProps {
  className?: string;
}

export const App: React.FunctionComponent<IAppProps> = props => (
  <div {...style('root', {}, props)}>
    <Header message="Welcome to React with Stylable" />
    <Content mainFile="src/index.tsx" />
  </div>
);
