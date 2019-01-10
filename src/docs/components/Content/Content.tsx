import React from 'react';
import style from './content.st.css';

import Text, { H1, H2, H3, H4, H5, P, } from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';

export interface IContentProps {
	className?: string;
	mainFile: string;
}

export const Content: React.FunctionComponent<IContentProps> = (props) => (
	<div {...style('root', {}, props)}>
		<H1 className={style.title} variant="speakLoud" uppercase>
			Text as h1
		</H1>
		<H2 variant="speak">My first stylable component</H2>
		<P truncate>
			Lorem Ipsum <a href="#">is simply dummy text</a> of the printing and typesetting
			industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
			when an unknown printer took a galley of type and scrambled it to make a type specimen
			book. It has survived not only five centuries, but also the leap into electronic
			typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
			release of Letraset sheets containing Lorem Ipsum passages, and more recently with
			desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</P>
		<P variant="speakLoud">
			To get started, edit <code>{props.mainFile}</code> and save to reload.
		</P>
		<P variant="speakSoft">
			To get started, edit <code>{props.mainFile}</code>
		</P>
		<Text as="figcaption">
			To get started, edit <code>{props.mainFile}</code> and save to reload.
		</Text>

		<div>
			<Button>This is a basic button</Button>
			<Button className={style.button}>Tests</Button>
		</div>
	</div>
);
