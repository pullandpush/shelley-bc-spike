import classNames from 'classnames';

import Text from './components/text.st.css';
import ButtonNext from './components/button.st.css';
import BcTheme from './theme.st.css';

//import HexToRGB from '../../formatters/hexToRGB';

const getClassNames = (values: any, stylesheet: any, rootcls?: any) => {
	// @ts-ignore
	const clsArray = values.map((cls) => stylesheet[cls] || null);
	return classNames(stylesheet[rootcls], clsArray);
};

export const text = (...values: any) => getClassNames(values, Text, 'text');
export const button = (...values: any) => getClassNames(values, ButtonNext, 'button');
export const Theme = BcTheme.root;
