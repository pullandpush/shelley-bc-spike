import React from 'react';
import style from './app.st.css';
import { Content } from '../docs/components/Content/Content';
import { Header } from '../docs/components/Header/Header';
//import '../project.st.css';
// import '../../themes/bc/theme.st.css';
import { Theme } from '../themes/bc/index';

export interface IAppProps {
	className?: string;
}

export const App: React.FunctionComponent<IAppProps> = (props) => {
	// console.log(Theme)
	return (
		<div {...style('root', {}, props)} className={Theme}>
			<Header message="Welcome to React with Stylable" />
			<Content mainFile="src/index.tsx" />
		</div>
	);
};
