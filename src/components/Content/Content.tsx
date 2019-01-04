import React from 'react';
import style from './content.st.css';

import Text from '../Text/Text'

export interface IContentProps {
  className?: string;
  mainFile: string;
}

export const Content: React.FunctionComponent<IContentProps> = props => (
  <div {...style('root', {}, props)}>

    <Text as="h1" uppercase bold>Text as h1</Text>
    <Text as="h2" variant="speak">My first stylable component</Text>

    <Text as="p" truncate>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

    <Text as="p">To get started, edit <code>{props.mainFile}</code> and save to reload.</Text>
  </div>

);
