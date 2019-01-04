/* Text.jsx */
import React, { FunctionComponent } from "react";
import style from './text.st.css';

export type TextVariants = "roar" | "announceLoud" | "announce" | "announceSoft" | "ennounce" | "speakLoud" | "speak" | "speakSoft" | "mention" | "whisper";

interface TextProps {
  as?: string;
  bold?: boolean;
  truncate?: boolean;
  uppercase?: boolean;
  variant?: TextVariants;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  truncate = false,
  bold = false,
  uppercase = false,
  variant = "speak",
  as: tagName = "span",
  ...rest
}) => {
  return React.createElement(tagName, {
    ...style('root', {
      bold,
      truncate,
      uppercase,
      variant,
    }, rest)
  },
    children
  )
};

export default Text
