/* Text.tsx */
import React, { FunctionComponent } from 'react';
import style from './text.st.css';
import classNames from 'classnames';

import { TextVariants } from '../types';

interface TextProps {
	as: string;
	bold?: boolean;
	className?: string;
	truncate?: boolean;
	uppercase?: boolean;
	variant?: TextVariants;
}

const Text: FunctionComponent<TextProps> = ({
	as: tagName,
	bold = false,
	children,
	truncate = false,
	uppercase = false,
	variant = 'speak',
	...rest
}) => {
	const rootClassNames = classNames(style.root, style[variant], {
		bold,
		uppercase
	});

	return React.createElement(
		tagName,
		style(
			rootClassNames,
			{
				truncate
			},
			rest
		),
		children
	);
};

type TextExports = Pick<TextProps, Exclude<keyof TextProps, 'as'>>;

export const H1: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="h1" {...rest}>
		{children}
	</Text>
);
export const H2: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="h2" {...rest}>
		{children}
	</Text>
);
export const H3: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="h3" {...rest}>
		{children}
	</Text>
);
export const H4: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="h4" {...rest}>
		{children}
	</Text>
);
export const H5: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="h5" {...rest}>
		{children}
	</Text>
);
export const P: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="p" {...rest}>
		{children}
	</Text>
);
export const SPAN: FunctionComponent<TextExports> = ({ children, ...rest }) => (
	<Text as="span" {...rest}>
		{children}
	</Text>
);

export default Text;
